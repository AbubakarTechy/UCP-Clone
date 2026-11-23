# Security and Privacy Boundaries

## Current implementation
This repository is a static front-end demonstration. It does not implement authentication, authorization, a backend API, or a database.

## Safe usage
- Treat all displayed academic information as sample content.
- Never enter a real university password or personal student record.
- Browser local storage is used for non-sensitive interface preferences only.
- Do not treat client-side filtering or hidden elements as access control.

## If a backend is introduced
- Use HTTPS for all authenticated traffic.
- Enforce authorization on the server for every protected resource.
- Store passwords using a suitable password-hashing algorithm.
- Validate and normalize input on the server.
- Avoid logging credentials, tokens, or sensitive academic records.
- Define data retention and deletion policies.
- Review dependencies and keep secrets out of source control.

These are future implementation considerations, not features currently provided by this demo.