# Manual Testing Checklist

Use this checklist when changing the UCP Portal Clone. The project is a static HTML, CSS, and JavaScript demo, so the checks can be run in a modern browser without installing dependencies.

## Course browsing
- [ ] Search by course title, course code, and instructor.
- [ ] Combine a search term with each attendance filter.
- [ ] Sort matching courses by name and attendance.
- [ ] Confirm the result count updates after every filter change.
- [ ] Confirm the empty state appears when no courses match.
- [ ] Reset the empty state and confirm all controls return to defaults.
- [ ] Reload the page and verify saved search and filter preferences restore.

## Dashboard actions
- [ ] Export visible courses and open the CSV in a spreadsheet.
- [ ] Apply a filter before exporting and confirm hidden courses are excluded.
- [ ] Use the print action and inspect the print preview.
- [ ] Confirm the average attendance matches the six displayed sample values.

## Appearance and responsive layout
- [ ] Toggle light and dark themes.
- [ ] Change the operating-system theme while no manual theme is saved.
- [ ] Set a manual theme and confirm system changes no longer override it.
- [ ] Check the dashboard at desktop, tablet, and narrow mobile widths.
- [ ] Enable reduced motion and confirm transitions are minimized.

## Keyboard and accessibility
- [ ] Navigate interactive controls using Tab and Shift+Tab.
- [ ] Use Escape to clear the course search.
- [ ] Use / to focus search when not typing in another control.
- [ ] Confirm the skip link moves focus to the main content.
- [ ] Check that status and progress information has accessible text.
