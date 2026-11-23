# Front-End Architecture

The application is a static browser project with three main layers.

## Structure
- `index.html` defines semantic page sections, navigation, dashboard cards, schedule, and course content.
- `style.css` owns design tokens, component styling, responsive breakpoints, dark theme overrides, and print rules.
- `app.js` attaches browser event listeners and manages client-side interactions.

## Runtime flow
1. The browser parses the HTML document.
2. The deferred JavaScript file runs after HTML parsing.
3. JavaScript locates course cards and control elements.
4. Event handlers update filtering, sorting, theme, and export behavior.
5. CSS responds to the document theme attribute and viewport size.

## Design principle
Keep content structure in HTML, presentation in CSS, and behavior in JavaScript. Avoid introducing a framework unless the project requirements justify the added build tooling.