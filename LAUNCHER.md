# DeepSeek inside Codex

DeepAstra gives Astra a guide and a Python launcher for delegating work from the terminal. Astra writes the brief, invokes `launch.py`, and reviews the output. Each delegated run starts a separate Codex CLI process powered by DeepSeek. The launcher does not choose tasks or perform Astra's review automatically.

DeepAstra launches the real Codex CLI with DeepSeek V4.1 Flash through the direct DeepSeek Responses API. It requests **High** reasoning. File editing, shell commands and local image inspection come from Codex. This does not switch the model of an existing Astra chat or give DeepSeek a ChatGPT subscription.

Requires Python 3.10+ and Codex CLI. The verified local version is `codex-cli 0.154.0`. No global Codex configuration is changed.

## Choose your API account

You only need one of these providers. API usage is billed by the provider you choose, separately from your Astra or ChatGPT access. DeepAstra uses the Codex CLI harness; it does not require installing DeepSeek's separate Harness app.

### DeepSeek directly

Create an account at the [DeepSeek API platform](https://platform.deepseek.com/), add API credit and create an API key. Store it privately as `DEEPSEEK_API_KEY` in the environment used to launch DeepAstra. This is the default provider.

With that environment variable available, check the setup and start an interactive session:

```bash
python3 launch.py doctor
python3 launch.py run --cwd /path/to/project
```

### OpenRouter instead

Create or sign in to your [OpenRouter account](https://openrouter.ai/), add API credit and create a key under [API keys](https://openrouter.ai/settings/keys). Store it privately as `OPENROUTER_API_KEY`. You do not need a separate DeepSeek account for this route.

With that environment variable available, select OpenRouter explicitly:

```bash
python3 launch.py doctor --provider openrouter
python3 launch.py run --provider openrouter --cwd /path/to/project
```

Use the same `--provider openrouter` option when Astra delegates a task with `launch.py exec`. The launcher selects the DeepSeek model for either provider. Your key stays in your local environment or a private key file; it does not belong in the task brief or this repository.

## Launch and delegate

Keep your API key in your existing secret manager as `DEEPSEEK_API_KEY`, or pass the path to a private key file stored outside your project. Never commit the key.

```bash
python3 launch.py doctor --key-file ~/.config/deepastra/key
python3 launch.py doctor --smoke --key-file ~/.config/deepastra/key
python3 launch.py run --cwd /path/to/project --key-file ~/.config/deepastra/key
```

`doctor` checks the executable and credential presence. `doctor --smoke` spends a small amount of API credit to make DeepSeek write and read a real file using Codex tools. It then verifies the file independently.

For a task that Astra delegates from its terminal:

```bash
python3 launch.py exec \
  --cwd /path/to/isolated/project \
  --key-file ~/.config/deepastra/key \
  --prompt-file /path/to/task.txt \
  --status-file /path/to/isolated/project/run-status.json \
  --timeout 900
```

The task file should say what to produce, where to work, what to preserve and how success will be checked. Astra can inspect the resulting files and the status summary after DeepSeek finishes. This launcher provides an explicit handoff; it does not implement an automatic model-routing policy or guarantee lower total cost.

To attach visual references, repeat `--image /path/to/reference.png`. To use OpenRouter explicitly, add `--provider openrouter` and supply `OPENROUTER_API_KEY` or its corresponding private key file. There is no silent provider failover, so every run retains its actual provider label.

The default uses a focused file/shell tool configuration. Add `--with-apps` to enable the installed app and plugin integrations for that invocation. Available integrations still depend on the local Codex installation and its connections. A large unnecessary tool catalog can inflate the prompt. In our two local smoke checks, focusing the tool catalog reduced reported input substantially, but the checks had different tool-call counts and are not a controlled cost benchmark.

Raw model/tool events stay in `~/.cache/deepastra/runs/` by default, with a private directory and restrictive file permissions. Use `--log-dir` to choose another private location outside any served website. `run-status.json` records the actual requested model, provider, reasoning, usage and tool-event counts without including raw prompts or tool output.

Direct DeepSeek cost estimates use the returned Codex token counts and the published peak/off-peak rates verified September 12, 2026. They are estimates, not provider dollar receipts. They exclude unreported failed-call billing and supervising Astra's usage. A missing cost is unavailable, never zero. Current rates: [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing/).

The unattended `exec` command is bounded by the requested timeout and terminates its process group when the limit is reached. It uses Codex's workspace-write sandbox and approval policy `never`. Inspect the scope of a task before handing it control of a project. Existing host-managed Codex requirements remain applicable.

Codex can report missing custom-model catalog metadata while still successfully executing the task. The direct provider passed the actual file/shell smoke test; that warning is recorded in the private log rather than hidden.

Configuration reference: [official Codex documentation](https://learn.chatgpt.com/docs/config-file/config-reference).
