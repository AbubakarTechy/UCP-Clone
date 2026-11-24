# Project validation

This repository is a static HTML, CSS, and browser-JavaScript demo. It does not need a package manager or build step.

Run the checks with Node.js 20 or newer:

```sh
node scripts/check-project.mjs
```

The checks validate essential document landmarks and references, confirm that key responsive and accessibility CSS features remain present, and compile `app.js` without executing browser APIs.

These are fast regression checks, not a replacement for testing the interface in a real browser. Follow the manual scenarios in [the manual test plan](../docs/MANUAL_TEST_PLAN.md) for interaction, keyboard, theme, print, export, and responsive behavior.
