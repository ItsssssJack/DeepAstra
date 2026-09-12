# DeepAstra: recorded results

September 12, 2026. Seventeen conditions produced sixteen websites. DeepSeek in native Codex at max effort produced no HTML within its 15-minute limit. Every completed version is preserved, including visible defects.

The strongest value candidate is the direct DeepSeek max build at $0.06467. Astra direct cost $1.41609, a 21.90× difference in the bill. My visual assessment favors Astra for matching the reference: its main card position, wordmark scale and restrained lighting are closer. The DeepSeek result has wider, more tilted side cards, a busier grid and different controls. This is a price difference between outputs, not proof of equal quality. Jack's blind visual judgment is still the deciding result.

## Every condition

Costs are USD. Workflow costs include all listed upstream model work, including the architect. Mobile overflow is document width minus the 390px viewport; zero does not prove every mobile detail works. “Native combined” means the two Codex sessions share a $1.31438 bill whose individual allocation is unavailable.

| Condition | Complete website | Workflow cost | Model calls | Mobile overflow |
|---|---|---:|---:|---:|
| [DeepSeek / thinking off](results/deepseek-raw-none/index.html) | Yes | $0.02106 | 1 | 505px |
| [DeepSeek / low](results/deepseek-raw-low/index.html) | Yes | $0.04440 | 1 | 255px |
| [DeepSeek / high](results/deepseek-raw-high-64k/index.html) | Yes | $0.05037 | 1 | 23px |
| [DeepSeek / max](results/deepseek-raw-max-64k/index.html) | Yes | $0.06467 | 1 | 0px |
| [DeepSeek in Codex / high](results/deepseek-native-high/index.html) | Yes | Native combined | Unknown | 0px |
| DeepSeek in Codex / max | No | Native combined | Unknown | No website |
| [Astra / direct](results/astra-raw-high-64k/index.html) | Yes | $1.41609 | 1 | 0px |
| [Astra in Codex / high](results/astra-codex-high/index.html) | Yes | $2.77911 | 14 | 0px |
| [Astra plan → DeepSeek](results/deepastra-plan-64k/index.html) | Yes | $0.30212 | 2 | 220px |
| [DeepSeek self-review / round 1](results/deepseek-loop-1/index.html) | Yes | $0.10656 | 3 | 23px |
| [DeepSeek self-review / round 2](results/deepseek-loop-2/index.html) | Yes | $0.15125 | 5 | 23px |
| [Astra critic / round 1](results/astra-critic-1/index.html) | Yes | $0.54168 | 3 | 0px |
| [Astra critic / round 2](results/astra-critic-2/index.html) | Yes | $1.04732 | 5 | 0px |
| [DeepAstra / self-review 1](results/deepastra-loop-1/index.html) | Yes | $0.35738 | 4 | 220px |
| [DeepAstra / self-review 2](results/deepastra-loop-2/index.html) | Yes | $0.42843 | 6 | 220px |
| [DeepAstra / late Astra review](results/deepastra-final/index.html) | Yes | $0.95516 | 8 | 32px |
| [DeepAstra / cheap mobile repair](results/deepastra-mobile-ds/index.html) | Yes | $0.49154 | 8 | 0px |

## What changed the result

Max did better than high in this particular direct comparison. High cost $0.05037 and left 23px of horizontal mobile overflow. Max cost $0.06467 and left none. Thinking off and low were cheaper but overflowed by 505px and 255px. This single sample contradicts the proposed story that extra thinking necessarily makes this task worse. It cannot establish that max always wins.

Cheap self-criticism did not reliably converge. Two DeepSeek reviews of the high seed raised total cost to $0.15125 while its 23px overflow remained. The Astra-plan branch still had 220px overflow after two DeepSeek reviews. Those earlier critics received desktop renders; they did not receive the later mobile screenshot and measured overflow.

Astra criticism improved the unplanned DeepSeek branch, including removing its mobile overflow. But two rounds cost $1.04732 in total, already 74% of the $1.41609 Astra-only baseline. Each review resent the source, reference and render. Astra's expensive input, including billed cache writes, dominated. Repeated criticism can erase most of the saving even when its written feedback is short.

The cleanest critic comparison starts from the same Astra-plan branch after two cheap loops, at $0.42843. Both final conditions received identical source, reference, desktop screenshot, mobile screenshot and measured diagnostics. Astra's critique cost $0.45928; DeepSeek's cost $0.01903. Including the ensuing DeepSeek rewrite, the final repair cost $0.52673 versus $0.06311. The cheaper repair was 8.35× less expensive and removed the 220px overflow completely. The Astra-led repair left 32px. Both retained overly hard spotlight shapes that differ from the reference. Diagnostic success and visual fidelity must be judged separately.

The resulting all-in hybrid totals were $0.49154 for the cheap final repair and $0.95516 for the late Astra review. Those are 2.88× and 1.48× below Astra direct, respectively. Neither gives evidence for a 100× finished-work claim.

## What happened inside Codex

The native high run created a full website with working local sign-in feedback and no document-level mobile overflow, but reached the 15-minute limit without finishing its session. Its visual layout was less faithful than the strongest direct results. Native max completed 43 shell commands, repeatedly measuring pixels in the reference image near the end, and left no index.html. The tool-event summary is retained with that condition. These are observations of this provider/integration/time budget, not proof that Codex generally weakens DeepSeek.

Earlier metering-proxy attempts encountered output limits, provider rate limits and Responses transport failures. A direct, documented Codex/OpenRouter integration was then tested separately. Native routing was automatic; its serving host was not captured. Successful direct API runs were pinned to GMICloud. Provider routing, tool budgets and integration reliability are confounds in any harness comparison. Astra's Codex result also required a paid continuation after a transport failure; its $2.77911 total includes that continuation.

The original native timeout stopped the Node launcher but briefly left its child running. The high and max cost windows therefore overlapped. Both children are stopped, and both runners now terminate process groups on timeout. The combined native bill is derived from the shared API-key delta after subtracting the four separately metered final repair calls. Individual native prices are deliberately withheld. The high website is the snapshot captured at its original cutoff, not a later orphan-produced revision.

## Cost audit

Total recorded OpenRouter usage was $9.560981269. The ledger reconciles exactly to the key's monthly usage increase from $1.904658 to $11.465639269. This includes two availability probes, failed setup attempts, every experimental call, and native cleanup overhead. Shared ancestors count once in the global ledger and once in each alternative workflow's own total.

The key allowance ended at $18.534360731. The wider account ended at $107.014397854. The wider pool may have other keys drawing from it, so the task bill uses this key's reconciled ledger rather than the account-wide balance difference.

Astra/Codex research, brief preparation, comparison-room construction, harness development and browser operation in the parent task are excluded. The experiment measures model-role costs after setup. It does not claim a completely Astra-free end-to-end evaluation process. The reusable runner offers an optional deterministic browser adapter to remove per-round browser orchestration from future runs, but that adapter was syntax-checked rather than used in these recorded trials.

## Verification and reuse

All sixteen completed pages were rendered at a verified 1600×1000 desktop viewport and 390×844 mobile viewport. Screenshots and full-page captures are retained. All sixteen primary sign-in forms produced local success feedback using dummy input. Inline JavaScript syntax was checked. Customization controls were sampled; this is not a comprehensive accessibility, security or application test suite. No real authentication was performed.

Six tests cover process-group timeout cleanup and stage lineage, all-role cost inclusion, budget rejection before calls, preservation of existing workflows and child stages, and path/partial-output rejection. Workflow tests use mocked model responses; the process test launches and stops a real harmless child process. The actual individual API build and critique functions were exercised by the recorded runs. The optional standalone Playwright capture adapter was not executed in this session; Codex browser tools supplied the evidence.

For this reference, no generated photography was needed. Builders used inline CSS and SVG so all conditions had the same visual resources. Higgsfield credits were not spent. The “design loop” here is implemented explicitly in this repo; no unavailable prior skill was silently assumed to be installed.

A practical default from this experiment is DeepSeek max for an initial cheap draft, followed by measured browser diagnostics and a cheap critic. Escalate a specific remaining visual problem to Astra only if it matters enough to justify the cost. This is a working hypothesis from one task, not a universal routing rule. The runner preserves each version so a later loop cannot destroy the best earlier result.
