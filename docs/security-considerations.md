# Security Considerations

## Current architecture

The project is a static front-end demo with no login, server, database, API, or privileged operations. Browser-side preferences are not an authentication mechanism.

## Safe boundaries

- Do not collect credentials or private student data.
- Do not treat local storage as secure storage for secrets.
- Do not claim that client-side sample values are verified.
- Do not add real authentication by hiding or showing elements in JavaScript alone.
- Keep the unofficial-demo notice visible.

## If a backend is introduced

A future backend requires a separate security design covering authentication, authorization, input validation, transport security, secure session handling, logging, data retention, and privacy obligations. This document is not a security audit or certification.
