# Development workflow

## Local setup

The portal is a static front-end project. Open `index.html` directly in a modern browser, or serve the repository with the VS Code Live Server extension.

No dependencies need to be installed.

## Before opening a pull request

1. Make focused changes to HTML, CSS, or JavaScript.
2. Run `node scripts/check-project.mjs` with Node.js 20 or newer.
3. Open the page in a browser and exercise the changed interaction.
4. Check keyboard focus and a narrow mobile viewport.
5. Update relevant documentation when behavior or project scope changes.

## Continuous integration

The Project quality workflow runs the same lightweight checks on pushes and pull requests targeting `main`. A successful run confirms basic file structure and JavaScript syntax; it does not claim full browser or accessibility automation.
