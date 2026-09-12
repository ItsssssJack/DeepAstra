# Agentic OS: DeepSeek inside Codex

Local result: http://127.0.0.1:8082/dashboard

DeepSeek High implemented the Business design system inside the actual Agentic OS dashboard on a separate branch. Astra supplied the brief, inspected the screenshots and requested one focused visual correction. All dashboard UI edits were written by DeepSeek.

The dashboard now has Overview, Usage, Workspace and System tabs, keyboard navigation, shareable tab URLs, Business-style pill controls, typography and dark/lilac surfaces. Existing KPI art and underlying data logic remain. The copied runtime data stays in the private worktree and is git-ignored.

Independent desktop verification passed tab clicks and keyboard navigation, URL reload restoration,7day spend filtering, Subscriptions/Tokens switching, AI spend drill-down and close, Dream carousel movement, theme consistency, and the unchanged Business route. Desktop scroll width equals the1280pxviewport. Direct vite production build passed with exit0 after dependency isolation. The source checkout's uncommitted changes remained unchanged.

Astra review caught a light-sidebar/dark-main mismatch and overly faint headline. DeepSeek corrected those and panel spacing in a second run. The result adopts the existing system; it still retains the older dashboard's multicolor KPI graphics, so this is not a complete visual re-creation.

The native Codex first pass took327.097seconds; focused revision110.661seconds. CLI token counters are in RESULT.json. There is no isolated dollar receipt and Astra supervision is not metered, so this does not prove an X-times-cheaper combined workflow.

Known inherited issues: currency SSR hydration mismatch and duplicate model React keys also reproduce on the unchanged original. TypeScript errors remain in unrelated Design/config files. No mobile QA, merge or publication was performed.
