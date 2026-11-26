# Browser Support Expectations

The dashboard uses standard browser capabilities: semantic HTML, CSS custom properties, media queries, DOM APIs, local storage, Blob downloads, and the browser print dialog.

## Expected environment

Use a current version of a mainstream desktop or mobile browser. Older browsers may not support every enhancement, especially optional storage and newer JavaScript methods.

## Graceful degradation

- The HTML content should remain readable without JavaScript.
- Search, sorting, and theme preferences should tolerate unavailable browser storage.
- The print action should use the native print dialog.
- CSV export should be tested in browsers that support Blob object URLs.

This project does not publish a formal browser certification matrix. Verify the target browsers before using the demo in a wider deployment.
