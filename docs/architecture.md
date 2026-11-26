# Architecture

## Overview

UCP Portal Clone is a static, browser-only interface built with semantic HTML, CSS, and vanilla JavaScript. It does not use a framework, bundler, API server, or database.

## Runtime flow

1. The browser loads `index.html`.
2. The document loads `style.css` for layout, themes, responsive rules, and print styles.
3. The deferred `app.js` script queries the page controls and course cards.
4. JavaScript enhances the sample markup with filtering, sorting, attendance summaries, theme selection, CSV export, and print actions.

## Responsibilities

- `index.html`: page structure, navigation, sample student data, timetable, and course cards.
- `style.css`: design tokens, components, responsive breakpoints, dark theme, reduced-motion handling, and print presentation.
- `app.js`: DOM interactions and optional browser-storage preferences.

## Design constraints

The HTML contains the sample data, so the interface remains readable if JavaScript is unavailable. JavaScript should progressively enhance the page rather than become a requirement for understanding its content.

## Data flow

Course filters read text and attendance values from existing course-card elements. Sorting changes their DOM order. Preferences are stored locally when browser storage is available; no values are sent to a remote service.
