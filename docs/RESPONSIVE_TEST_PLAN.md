# Responsive Testing Guide

Review the dashboard at representative viewport widths.

| Viewport | Areas to inspect |
| --- | --- |
| 1440px desktop | Header spacing, four summary cards, three-column course grid |
| 1024px laptop | Navigation fit, content width, course card spacing |
| 768px tablet | Two-column summary and course layouts |
| 390px mobile | Stacked header, profile panel, filters, and single-column cards |
| 320px narrow mobile | Horizontal overflow, long course names, search controls |

## What to verify
- No page-level horizontal scrolling at supported widths.
- Course titles wrap without overlapping attendance values.
- Search and select controls remain usable.
- Navigation links remain visible and have comfortable touch targets.
- Profile and summary information retain a clear reading order.

Use browser developer tools to test intermediate widths, not only the exact sizes listed above.