# Sample Data Dictionary

All values in this project are illustrative front-end demo content. They are not fetched from or verified against university systems.

| Field | Meaning | Example |
| --- | --- | --- |
| Student name | Display name in the profile panel | Sample student |
| Student identifier | Demo identifier shown under the name | Demo ID |
| Academic standing | Text status shown in the profile | Good |
| CGPA | Sample cumulative grade-point value | 3.50 |
| Earned credits | Sample completed credit hours | 17.0 |
| In-progress credits | Sample current course load | 14.0 |
| Course code | Short course identifier | ISL201 |
| Course name | Human-readable course title | Islamic Studies |
| Instructor | Sample instructor display name | Demo instructor |
| Credits | Course credit-hour label | 2.0 credits |
| Attendance | Percentage represented in text and progress-bar ARIA attributes | 90% |
| Term | Sample academic period attached to a course | Spring 2024 |

## Attendance interpretation

The interface derives a display label from the numeric attendance value:

- Below 90%: Needs attention
- 90% through 94%: On track
- 95% and above: Excellent

These labels are UI guidance for the sample dataset, not official academic policy.
