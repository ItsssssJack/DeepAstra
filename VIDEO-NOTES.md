# DeepAstra: filming brief

The experiment gives you a better story than a blanket “100X cheaper” claim: DeepSeek made a usable website for 6.5 cents, Astra was closer to the reference, and an expensive critic did not automatically produce the better repair.

## Title directions

“NEW DeepSeek + GPT-6: I Tested the ‘100X Cheaper’ Hack”

“I Built DeepAstra. How Much GPT-6 Do You Actually Need?”

“6 Cents vs GPT-6: Can You Tell the Difference?”

“DeepAstra” works as the thumbnail label. For a factual number, “6¢ vs $1.42” comes directly from the two recorded builds. If you use “83X,” label it as the off-peak output-token price comparison. These tests do not establish 83× or 100× savings at equal quality.

## Opening

“One of these websites cost six cents. The other cost more than twenty times as much. Both started with the same reference. So I built DeepAstra to find out how little GPT-6 you actually need. And the surprising part wasn't the cheap model. It was what happened when I paid the expensive model to judge it.”

Show the source, then the direct DeepSeek max and Astra direct builds with model names and cost hidden. Let viewers choose before the reveal. Keep the full website accessible because a good first viewport can hide broken mobile layouts or missing sections.

## The two news stories

DeepSeek V4.1 Flash launched September 10. The capability story is stronger selected agent benchmarks, native vision and a million-token context window. Show the official agentic chart. DeepSWE is 74.2 versus Sol's 73.0, but Terminal-Bench 3.0 is 30.0 versus Sol's 34.4. Astra is absent, so the graph does not prove Astra-level performance. [Model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

The economic story is much cheaper context handling and output. Show the original KV-cache graphic, then the rate table. DeepSeek direct off-peak output is $0.60 per million; Astra standard output is $50. That is an 83.3× token-price divisor. Our GMICloud route charged $1.20 output, so this session did not receive the off-peak direct rate. [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing/) · [Astra pricing](https://developers.openai.com/api/docs/models/gpt-6-astra)

## Demo order

| Beat | Show | Reveal |
|---|---|---|
| Cheap baseline | Direct max beside Astra direct | $0.06467 versus $1.41609; 21.9× different bills, visibly different fidelity |
| Thinking settings | Off, low, high, max; toggle Mobile check | More thinking helped in this sample; only max had zero raw DeepSeek overflow |
| The harness | Native Codex high and max cards | High produced a site but timed out; max performed 43 shell commands and produced no HTML in 15 minutes |
| The critic tax | Astra critic round 1, then round 2 | Total climbed to $1.04732, approaching the $1.41609 Astra-only result |
| The matched repair | DeepAstra late Astra review versus cheap mobile repair | Same diagnostics, 32px versus zero overflow; repair bills $0.52673 versus $0.06311 |
| The reusable system | workflow.py and the final comparison room | Optional Astra plan, bounded cheap review loops, optional late escalation, preserved versions |

The clean mobile comparison is the pair of final repairs. Earlier loops did not have the mobile evidence. Avoid editing the sequence to imply the critic model alone caused improvements that came from better diagnostic input.

## Answer the objection on screen

“If Astra does twenty percent of the work, how can the whole thing be a hundred times cheaper?”

It cannot under that cost model. Move the calculator to 20% Astra and 83.3× DeepSeek. The result is 4.77× cheaper, or 79.04% less. Even free DeepSeek would cap the saving at 5×. Then increase the work multiplier to show how repeated revisions consume the remaining saving.

For the real workflows, the Astra plan plus DeepSeek build cost $0.30212 but had mobile defects. Two cheap reviews and the final cheap mobile repair brought it to $0.49154, still 2.88× below Astra direct. Adding the late Astra critic instead brought it to $0.95516. Compare finished quality before choosing which saving deserves to be the headline.

## Closing angle

“The cheap model gives you more attempts. It doesn't guarantee those attempts get better. DeepAstra keeps the evidence, checks the browser, and lets you spend Astra where the remaining mistake actually matters.”

Use the repo as the resource-to-community handoff. It contains the runner, all sixteen websites, the failed seventeenth condition, prompts, graphs and cost receipts. It is currently private for review. The experiment's full API bill was $9.56; parent-task research and orchestration costs are excluded and should be disclosed wherever you explain the accounting.
