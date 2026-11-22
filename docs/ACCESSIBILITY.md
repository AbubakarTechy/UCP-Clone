# Accessibility Notes

The interface aims to remain usable with a keyboard, screen reader, and common browser zoom settings.

## Current support
- Semantic header, navigation, main, section, and footer landmarks.
- A skip link that moves keyboard users to the main dashboard.
- Explicit labels for the search field and filter controls.
- A live region for course result-count updates.
- Progress bars with accessible names and numeric values.
- Visible focus styles for interactive controls.
- Keyboard shortcuts for search, with typing targets excluded.
- Reduced-motion styling through the `prefers-reduced-motion` media query.
- Responsive layouts that adapt to smaller screens.

## Review when making changes
- Give every new control a visible or programmatic label.
- Do not communicate attendance status using color alone; keep its text label.
- Preserve logical heading order and keyboard focus order.
- Ensure hidden course cards are removed from the accessible presentation.
- Test contrast in both light and dark themes.
- Avoid adding keyboard shortcuts that interfere with normal text entry.
