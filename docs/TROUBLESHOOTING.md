# Troubleshooting

## Styles are missing
Check that style.css is in the same directory as index.html and that the stylesheet link uses the expected relative path.

## Interactions do not work
Check that app.js is beside index.html, that the script is loaded with defer, and that the browser console has no JavaScript errors.

## Logo is missing
Confirm logo_org.png exists at the path referenced by the HTML.

## Theme does not persist
The page can still switch themes when browser storage is blocked, but the preference may not survive a reload.

## CSV does not download
Check browser download permissions and try a current desktop browser.

## Search shows no courses
Clear the search field and reset the attendance filter. Search matches text displayed within the course card.

When reporting a bug, include browser name, viewport size, steps to reproduce, and the observed result. Do not include real student credentials or personal records.