# Codex capture adapter

Start the local server and workflow command from README.md. Keep the workflow process running while using Codex browser tools to service each `results/<run>/capture-request.json`.

Read the request’s URL and capture dimensions. Open the actual local page using the browser tools available in Codex. Verify `innerWidth` and `innerHeight` before capturing. Browser viewport controls may affect only the active tab; do not assume an override applied to a background tab. Use a dedicated capture tab, and recapture if its measured dimensions differ.

Capture the first viewport at 1600×1000 CSS pixels and save it as `desktop.png` in that run’s directory. Capture the mobile page at 390×844 CSS pixels as `mobile.png`. Record a JSON object with `width`, `height`, `scrollWidth` and any observed form or console problems as `qa-mobile.json`. Use real observations; do not replace missing evidence with guessed scores.

Write `capture.done.json` only after both screenshots exist and the mobile dimensions are verified. A minimal marker is `{"complete": true}`. Restore the desktop viewport before serving the next request. Do not manually edit the generated website; let the metered builder implement changes.

For interaction checks, inspect the current page’s controls first. Submit dummy input to local demo forms only. Confirm the resulting visible state. Preserve remaining defects in the QA record so the critic receives them. Do not submit to real authentication or third-party destinations.

Repeat until `workflow.json` reports complete or stopped. A stopped budget gate or API error is a result to report, not permission to spend more or change account privacy settings. Open the final local website, verify it, and report workflow cost alongside any remaining limitations.
