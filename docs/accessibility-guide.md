# Accessibility Guide

The project aims to keep its sample dashboard usable with a keyboard, assistive technology, and reduced-motion settings.

## Existing patterns

- Landmark elements identify the header, navigation, main content, sections, and footer.
- A skip link moves keyboard users to the main dashboard.
- Form controls have associated labels, including visually hidden labels where appropriate.
- The course result summary uses a polite live region.
- Attendance progress indicators expose their values through ARIA progress-bar attributes.
- Interactive controls use visible focus styles.
- The theme toggle exposes its state with `aria-pressed`.
- Reduced-motion preferences are respected in the stylesheet.

## Review checklist

When adding a control, provide an accessible name, keyboard operation, visible focus, and a clear state. Do not use color as the only way to communicate attendance status. Keep heading levels in a logical order and preserve semantic HTML.

## Manual verification

Test the page using only a keyboard, browser zoom, a screen reader where available, and the operating-system reduced-motion setting. Automated checks are useful, but they do not replace these checks.
