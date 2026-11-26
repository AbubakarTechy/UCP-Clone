# Privacy and Data Boundaries

## Static demo only

This repository is a front-end practice project. It has no authentication, backend, database, analytics integration, or official university connection.

The student profile, course names, instructors, grades, timetable, and attendance values are sample content embedded in the page source. They must not be treated as authoritative academic records.

## Browser storage

The interface may store the following preferences in the current browser:

- Course search text: `ucp-course-query`
- Attendance filter: `ucp-attendance-filter`
- Course sort mode: `ucp-course-sort`
- Theme selection: `ucp-clone-theme`

These values are used to restore the local interface. They are not transmitted by this project to a server. If storage is unavailable, the controls continue to work for the current page session.

## Safe use

Do not enter real passwords, private student records, or other sensitive information. Do not present screenshots or exported CSV files as official university records. A production service would require a separately designed security, privacy, access-control, and data-governance review.
