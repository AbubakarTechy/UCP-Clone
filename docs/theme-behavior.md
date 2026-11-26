# Theme Behavior

The dashboard supports light and dark themes through the `data-theme` attribute on the root HTML element.

## Initial selection

1. If a saved `ucp-clone-theme` preference exists, it takes precedence.
2. Otherwise, the page follows the operating-system `prefers-color-scheme` setting.
3. If browser storage is unavailable, the page still applies a theme for the current visit.

## User changes

The theme button toggles between light and dark mode and updates its accessible pressed state and label. When storage is available, the choice is saved locally.

If there is no saved choice, changes to the operating-system color preference are reflected while the page is open. An explicit user selection takes precedence over later system changes.

## Styling

Theme colors are defined with CSS custom properties. Component-specific overrides should be limited to elements that cannot be handled by the shared design tokens.
