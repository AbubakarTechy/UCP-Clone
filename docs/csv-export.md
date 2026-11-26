# CSV Export Behavior

The Export courses action creates a local CSV download named `ucp-demo-courses.csv`.

## Columns

1. Course code
2. Course name
3. Instructor
4. Credits
5. Attendance

## Included rows

Only course cards that are currently visible are exported. Search and attendance filters therefore affect the exported rows. Sorting affects row order because the visible cards are read in their current DOM order.

## Encoding and escaping

The export includes a UTF-8 byte-order mark to improve compatibility with spreadsheet applications. Every field is wrapped in double quotes, and embedded double quotes are doubled according to CSV escaping rules. Rows use CRLF line endings.

The export is generated in the browser; no file is uploaded to a server.
