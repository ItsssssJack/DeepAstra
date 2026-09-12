#!/usr/bin/env python3
"""DeepSeek in the real Codex CLI, with per-run configuration and private logs.

Requires Python 3.10+ and Codex CLI. No global Codex configuration is edited.
Set DEEPSEEK_API_KEY or OPENROUTER_API_KEY in your environment, or --key-file.
The requested reasoning effort is always High. Provider support is checked by
actually running a small file/shell task with `doctor --smoke`.
"""
import argparse
import datetime as dt
import json
import os
from pathlib import Path
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import uuid

PROVIDERS = {
    "deepseek": ("https://api.deepseek.com", "deepseek-flash", "DEEPSEEK_API_KEY"),
    "openrouter": ("https://openrouter.ai/api/v1", "deepseek/deepseek-v4.1-flash", "OPENROUTER_API_KEY"),
}


def write_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(value, indent=2) + "\n")
    tmp.replace(path)


def private_dir(path):
    p = Path(path).expanduser().resolve()
    p.mkdir(parents=True, exist_ok=True, mode=0o700)
    p.chmod(0o700)
    return p


def get_env(args):
    env = os.environ.copy()
    key_name = PROVIDERS[args.provider][2]
    if args.key_file:
        key = Path(args.key_file).expanduser().read_text().strip()
        if not key:
            raise ValueError("The key file is empty")
        env[key_name] = key
    if not env.get(key_name):
        raise ValueError("Set " + key_name + " or provide --key-file")
    return env


def command(args, interactive=False):
    endpoint, model, key_name = PROVIDERS[args.provider]
    provider = "deepastra_" + args.provider
    options = {
        "model_provider": provider,
        "model_reasoning_effort": "high",
        "model_providers." + provider + ".name": "DeepAstra " + args.provider,
        "model_providers." + provider + ".base_url": endpoint,
        "model_providers." + provider + ".wire_api": "responses",
        "model_providers." + provider + ".env_key": key_name,
        "model_providers." + provider + ".request_max_retries": 2,
        "model_providers." + provider + ".stream_max_retries": 2,
        "model_providers." + provider + ".stream_idle_timeout_ms": 120000,
        "approval_policy": "never",
        "project_doc_max_bytes": 0,
        "shell_environment_policy.inherit": "core",
        "shell_environment_policy.exclude": ["*KEY*", "*TOKEN*", "*SECRET*"],
        "features.multi_agent": False,
        "features.apps": args.with_apps,
        "features.plugins": args.with_apps,
        "skills.max_context_tokens": 1000,
    }
    cmd = [shutil.which("codex") or "codex"]
    if not interactive:
        cmd += ["exec", "--ephemeral", "--skip-git-repo-check", "--json"]
    cmd += ["--ignore-user-config", "-C", str(Path(args.cwd).resolve()), "-s", "workspace-write", "-m", model]
    for k, v in options.items():
        cmd += ["-c", k + "=" + json.dumps(v)]
    for path in args.image or []:
        cmd += ["-i", str(Path(path).resolve())]
    if not interactive:
        cmd += ["-"]
    return cmd


def summarize(log):
    usage = {}
    tools = []
    failed = False
    completed = False
    for line in log.read_text(errors="replace").splitlines():
        try:
            row = json.loads(line)
        except ValueError:
            continue
        if row.get("type") == "turn.completed":
            usage = row.get("usage", {})
            completed = True
        if row.get("type") in ("turn.failed", "error"):
            failed = True
        item = row.get("item", {})
        if row.get("type") == "item.completed" and item.get("type") in ("command_execution", "file_change", "mcp_tool_call"):
            tools.append({"type": item.get("type"), "exit_code": item.get("exit_code"), "status": item.get("status")})
    return usage, tools, completed, failed


def execute(args, prompt):
    env = get_env(args)
    log_dir = private_dir(args.log_dir or Path.home() / ".cache" / "deepastra" / "runs")
    run_id = dt.datetime.now(dt.timezone.utc).strftime("%Y%m%dT%H%M%SZ") + "-" + uuid.uuid4().hex[:8]
    log = log_dir / (run_id + ".jsonl")
    base = {"run_id": run_id, "model": PROVIDERS[args.provider][1], "provider": args.provider,
            "reasoning_effort_requested": "high", "harness": "Codex CLI", "wire_api": "responses",
            "apps_and_plugins_enabled": args.with_apps, "skills_catalog_token_budget": 1000,
            "codex_version": subprocess.check_output(["codex", "--version"], text=True).strip(),
            "started_at": dt.datetime.now(dt.timezone.utc).isoformat(), "state": "running",
            "timeout_seconds": args.timeout, "accounting": "Codex usage events; no per-call dollar receipt exposed by CLI"}
    if args.status_file:
        write_json(args.status_file, base)
    start = time.monotonic()
    log.touch(mode=0o600)
    with log.open("w") as out:
        proc = subprocess.Popen(command(args), stdin=subprocess.PIPE, stdout=out, stderr=subprocess.STDOUT,
                                env=env, text=True, start_new_session=True)
        proc.stdin.write(prompt)
        proc.stdin.close()
        timed_out = False
        try:
            proc.wait(timeout=args.timeout)
        except (subprocess.TimeoutExpired, KeyboardInterrupt):
            timed_out = True
            os.killpg(proc.pid, signal.SIGTERM)
            try:
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(proc.pid, signal.SIGKILL)
                proc.wait()
    usage, tool_events, completed, failed = summarize(log)
    result = dict(base, state="timeout" if timed_out else ("completed" if completed and proc.returncode == 0 else "failed"),
                  exit_code=proc.returncode, seconds=round(time.monotonic() - start, 3), usage=usage,
                  tool_events=tool_events, tool_event_count=len(tool_events), provider_error_seen=failed,
                  cost_usd=None, cost_note="Unavailable: no isolated per-run provider dollar receipt captured. Do not interpret as zero.")
    if args.provider == "deepseek" and completed and usage.get("input_tokens") is not None:
        # Published rates verified 2026-09-12. Keep this separate from a receipt.
        cached = usage.get("cached_input_tokens", 0)
        uncached = max(0, usage["input_tokens"] - cached)
        offpeak = (uncached * 0.15 + cached * 0.003 + usage.get("output_tokens", 0) * 0.60) / 1_000_000
        def is_peak(t):
            return t.weekday() < 5 and (1 <= t.hour < 4 or 6 <= t.hour < 10)
        began = dt.datetime.fromisoformat(base["started_at"])
        ended = dt.datetime.now(dt.timezone.utc)
        times = [began + dt.timedelta(seconds=n) for n in range(0, int((ended-began).total_seconds()) + 1, 30)] + [ended]
        peaks = {is_peak(t) for t in times}
        result["estimated_cost_usd"] = round(offpeak * (2 if peaks == {True} else 1), 8) if len(peaks) == 1 else None
        result["estimated_cost_range_usd"] = [round(offpeak, 8), round(offpeak * 2, 8)]
        result["cost_estimate_basis"] = {"source": "https://api-docs.deepseek.com/quick_start/pricing/", "rates_verified": "2026-09-12", "usage_source": "Codex turn.completed", "pricing_window": "mixed" if len(peaks) > 1 else ("peak" if True in peaks else "off-peak"), "offpeak_per_million_usd": {"uncached_input": 0.15, "cached_input": 0.003, "output_including_reasoning": 0.60}, "note": "Token-based estimate, not an API dollar receipt; excludes unreported failed-call billing and supervising Astra."}
    if args.status_file:
        write_json(args.status_file, result)
    write_json(log.with_suffix(".summary.json"), result)
    print(json.dumps(result, indent=2), flush=True)
    print("Private raw log: " + str(log), file=sys.stderr)
    return 124 if timed_out else proc.returncode


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=["run", "exec", "doctor"])
    parser.add_argument("--provider", choices=PROVIDERS, default="deepseek")
    parser.add_argument("--cwd", default=".")
    parser.add_argument("--key-file", help="Private API-key file; its contents are only passed through the child environment")
    parser.add_argument("--prompt-file", help="For exec: UTF-8 prompt file; otherwise read stdin")
    parser.add_argument("--timeout", type=int, default=900)
    parser.add_argument("--status-file", help="Optional public-safe run summary JSON path")
    parser.add_argument("--log-dir", help="Private raw-log directory outside any served site")
    parser.add_argument("--smoke", action="store_true", help="doctor: run an actual file and shell tool check (uses API credits)")
    parser.add_argument("--with-apps", action="store_true", help="Enable connected apps/plugins; default is focused file/shell tools")
    parser.add_argument("--image", action="append", help="Attach a reference image; repeat for multiple images")
    args = parser.parse_args()
    if not shutil.which("codex"):
        parser.error("Codex CLI is not installed or not on PATH")
    if args.timeout < 1:
        parser.error("--timeout must be positive")
    if args.action == "doctor":
        get_env(args)
        print(json.dumps({"codex": subprocess.check_output(["codex", "--version"], text=True).strip(),
                          "provider": args.provider, "model": PROVIDERS[args.provider][1], "key_present": True,
                          "reasoning": "high", "global_config_modified": False}))
        if not args.smoke:
            return 0
        with tempfile.TemporaryDirectory(prefix="deepastra-smoke-") as smoke:
            args.cwd = smoke
            code = execute(args, "Use your shell/file tools to write smoke.txt containing exactly DEEPASTRA_OK, then read it back with a shell command. Do not inspect any other directories or environment variables. Finish with the single word PASSED after verifying the file.")
            verified = Path(smoke, "smoke.txt").exists() and Path(smoke, "smoke.txt").read_text().strip() == "DEEPASTRA_OK"
            print(json.dumps({"smoke_file_verified": verified}))
            return code if code else (0 if verified else 1)
    if args.action == "run":
        env = get_env(args)
        return subprocess.call(command(args, interactive=True), env=env)
    prompt = Path(args.prompt_file).read_text() if args.prompt_file else sys.stdin.read()
    if not prompt.strip():
        parser.error("exec requires --prompt-file or a prompt on stdin")
    return execute(args, prompt)


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (ValueError, OSError) as exc:
        print("DeepAstra: " + str(exc), file=sys.stderr)
        sys.exit(1)
