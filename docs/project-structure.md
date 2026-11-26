# Repository File Structure

The project keeps its runtime deliberately small.

- `index.html` contains the dashboard markup and illustrative content.
- `style.css` contains design tokens, component styles, responsive rules, and print rules.
- `app.js` contains browser-side enhancements.
- `logo_org.png` is the logo asset referenced by the page.
- `docs/` contains project guidance, behavior notes, and manual verification material.

## Change ownership

When a change affects page content, update the HTML. When it affects presentation, update the stylesheet. When it changes interaction behavior, update the JavaScript and its relevant documentation. Keep documentation aligned with the actual implementation.
