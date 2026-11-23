# Manual Test Plan

Use this checklist when reviewing the portal demo in a modern desktop and mobile browser.

| Area | Test | Expected result |
| --- | --- | --- |
| Initial load | Open `index.html` | Dashboard and sample course cards render |
| Search | Search for a course code | Matching course remains visible |
| Search reset | Clear the search field | All courses return |
| Attendance | Select `Below 90%` | Only courses below 90% remain |
| Sorting | Select attendance sorting | Visible courses are ordered highest first |
| Theme | Toggle dark mode and reload | Theme changes and saved preference is restored when storage is available |
| CSV | Export visible courses | CSV contains visible course rows and headings |
| Print | Select Print dashboard | Browser print dialog opens |
| Keyboard | Press `/` outside a text field | Course search receives focus |
| Keyboard | Press Escape in search | Search is cleared |

## Regression notes
- Confirm the empty state appears when no course matches.
- Confirm clearing filters restores the default course list.
- Confirm the page remains usable when local storage is unavailable.
- Confirm no real student information is entered during testing.