# Manual Test Plan

Use this checklist after changing the page structure, styles, or JavaScript. Run it in a current desktop browser and at a narrow mobile viewport.

## Course discovery

- [ ] Search by course title and confirm matching cards remain visible.
- [ ] Search by instructor and course code.
- [ ] Enter a query with no matches and confirm the empty state appears.
- [ ] Clear the query with the Clear button.
- [ ] Press Escape in the search field and confirm the query is cleared.
- [ ] Use the slash key outside form controls to focus course search.

## Filtering and sorting

- [ ] Select Below 90% and confirm only lower-attendance courses appear.
- [ ] Select 90% and above, then 95% and above.
- [ ] Sort by course name and attendance.
- [ ] Reset all filters and confirm the default order returns.
- [ ] Confirm the result count matches the visible course cards.

## Preferences and theme

- [ ] Change search, attendance, and sort preferences; reload and confirm they restore.
- [ ] Change the theme; reload and confirm the selection persists.
- [ ] Test with browser storage disabled and confirm interactions still work for the current page.
- [ ] With no saved theme, change the operating-system color preference and observe the theme.

## Export and print

- [ ] Export courses and open the downloaded CSV in a spreadsheet application.
- [ ] Apply a filter before exporting and confirm only visible courses are included.
- [ ] Open the print dialog and inspect the print layout.

## Accessibility and responsive layout

- [ ] Navigate controls using Tab and Shift+Tab.
- [ ] Activate the skip link with the keyboard.
- [ ] Check that result updates are announced by assistive technology.
- [ ] Check layout at desktop, tablet, and mobile widths.
- [ ] Enable reduced motion and confirm transitions are minimized.
