# Troubleshooting

## Styles are missing

Confirm that `style.css` is in the same directory as `index.html` and that the stylesheet link uses the correct filename.

## Course controls do not respond

Confirm that `app.js` is beside the HTML file and that the script is loaded with the `defer` attribute. Check the browser console for JavaScript errors.

## Preferences do not persist

Browser storage may be disabled or restricted. The interface is designed to keep working for the current page even when preferences cannot be saved.

## Logo is missing

Confirm that `logo_org.png` exists at the path referenced by the image element.

## CSV does not open as expected

Try a current browser and spreadsheet application. The export is UTF-8 CSV and contains only currently visible course cards.
