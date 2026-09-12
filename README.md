# DeepAstra

Astra plans. DeepSeek builds. Screenshots decide what happens next.

This repo contains a metered AuthKit reproduction experiment and a reusable visual review loop. Open the local test room to compare full websites, screenshots, model settings and workflow costs. The research brief separates published token prices from the cost of producing a finished result.

## Open the recorded experiment

From this directory, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open [the test room](http://127.0.0.1:8765/). Click any completed experiment card to open its full website in the same tab. Use browser Back to return, or the Compare menu for side-by-side review. All model-generated pages are standalone HTML. Nothing in the demo performs real authentication. Use dummy data only.

The original reference image and research figures are included for this private review. They remain the work of their respective owners. AuthKit and WorkOS branding is retained to make visual comparison meaningful. This is an unofficial reproduction, with no affiliation or real account connection.

## Run a new DeepAstra loop in Codex

Export `OPENROUTER_API_KEY` in your shell. Keep the key out of files committed to Git. Put the task, design spec and screenshot into `reference/TASK.md`, `reference/DESIGN.md` and `reference/authkit-reference.jpg`. Use a new workflow name for every attempt.

```sh
python3 workflow.py my-test --with-astra-plan --rounds 2 --final-critic astra --budget 5
```

Give Codex this instruction while the command is running:

> Follow WORKFLOW.md. Service each capture-request.json using your browser tools. Preserve every generated version. Keep the model calls inside workflow.py so the planning, criticism and builds are metered. Open the final website and report the actual cost and any remaining defects.

The workflow writes a capture request between revisions. Codex renders the local page, saves desktop and mobile screenshots, records viewport/overflow diagnostics and writes the completion marker. The next DeepSeek critic sees the real screenshots and diagnostics before the builder revises the site. This capture adapter is intentionally supplied by Codex; running the Python command alone will wait for browser captures.

An optional deterministic capture adapter removes the need for Astra to operate the browser between rounds. Keep the local server running, then use:

```sh
npm ci
npx playwright install chromium
python3 workflow.py terminal-test --with-astra-plan --rounds 2 --final-critic deepseek --capture-mode playwright --budget 5
```

The optional adapter restricts requests to the local server and records screenshots, viewport sizes and console errors. It does passive capture, not interaction testing. Its syntax and dependency resolution were checked; it was not used to capture this recorded experiment. All recorded browser evidence came from Codex browser tools. Workflow orchestration and budget tests use mocked model calls. This distinction matters when assessing how much of the reusable runner has been exercised end to end.

The budget gate reserves a conservative upper estimate before every model call and includes all roles in the workflow. Its rates are documented in `workflow.py`; refresh them before reuse after provider pricing changes. The OpenRouter key’s own limit remains the billing limit. The runner also keeps a $5 key-balance reserve. Concurrent activity elsewhere on the same key can consume that reserve.

## Run individual conditions

```sh
python3 deepastra.py raw example-high --effort high
python3 deepastra.py raw example-max --effort max
python3 deepastra.py raw example-off --effort none
python3 deepastra.py raw example-astra --model openai/gpt-6-astra
python3 deepastra.py plan
python3 deepastra.py revise example-revision results/example-high --critic deepseek/deepseek-v4.1-flash
```

Before `revise`, capture `desktop.png` in the source result directory. `mobile.png` and `qa-mobile.json` are included automatically when present. Individual commands enforce the key reserve; use `workflow.py` for a per-workflow spending cap.

`python3 native_codex.py fresh-prefix` runs DeepSeek high and max using the documented direct Codex/OpenRouter integration without changing the user’s global Codex settings. It measures each otherwise idle session using the API key’s usage delta. Do not run other inference on that key at the same time. The earlier proxy-based experiments are retained as setup trials, including their transport and provider failures.

The production configuration pattern is documented by [OpenRouter](https://openrouter.ai/docs/cookbook/coding-agents/codex-cli). It uses `model_provider = "openrouter"`, the base URL `https://openrouter.ai/api/v1`, the pinned model ID `deepseek/deepseek-v4.1-flash`, and command-based authentication that reads `OPENROUTER_API_KEY`. The key should never appear as a literal in `config.toml`.

## What the accounting means

`results/<run>/usage.jsonl` contains usage and cost metadata. Per-workflow totals include ancestors: an Astra plan is charged once, then the build, each critic and each rewrite. The global total counts each actual call once. Shared ancestors therefore appear in multiple alternative workflow totals without being charged multiple times globally.

Failed initial 18K-cap trials and proxy setup attempts remain in the global total. They are not allocated to clean 64K direct runs. The recorded native Codex sessions overlapped because the original timeout stopped the launcher before its child. The high child was stopped, and the runner now terminates the process group. Individual native prices are unavailable; their combined bill is $1.31438, including post-timeout activity. The four matched repair API calls that overlapped this window were deducted using their own receipts. The individual serving host and API call count are unknown. Other runs use provider-returned usage accounting.

The final ledger reconciles exactly to the API key usage increase of $9.560981269. This includes availability probes, failed setup trials, all retained conditions and native cleanup overhead. Key allowance remaining at completion was $18.53436. The wider OpenRouter account had $107.01440 remaining; that pool can also be used by other keys.

Parent-task research, common-brief preparation, harness development and browser operation were performed in Astra/Codex and are excluded from experimental inference cost. This tests repeatable workflow economics after setup. It does not measure the full cost of inventing DeepAstra from scratch.

The first two visual review rounds received desktop screenshots. The final matched repair conditions also receive mobile screenshots and observed overflow. Compare those two final conditions with each other; do not attribute the value of extra diagnostic information solely to the critic model.

## Evidence and limitations

Each condition uses one AuthKit task and one sample. Judge visual fidelity before revealing model names and cost. A low bill with missing sections or mobile overflow is not an equivalent-quality win. The original raw and intermediate model outputs have not been manually polished by Astra.

`research/RESEARCH.md` contains source links and the pricing calculation. `manifest.json` powers the test room. `refresh.py` rebuilds it from the result folders. `qa-static.json`, viewport diagnostics and screenshots preserve observed checks. `test_workflow.py` tests lineage, cost inclusion, budget rejection before spending, result preservation and path validation with fake model responses. A real subprocess test verifies timeout cleanup even when a child ignores SIGTERM. The recorded experiments separately exercise the real API and browser components.

```sh
python3 -m unittest -q test_workflow.py
python3 refresh.py
```

Code in this repository is available under the MIT license. Reference materials and trademarks are excluded from that license.
