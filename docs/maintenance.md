# Maintenance Notes

## Routine review

When maintaining the dashboard:

1. Check that HTML element IDs used by `app.js` still exist.
2. Check that course attendance text and progress-bar values agree.
3. Verify responsive layouts after changing spacing or grid rules.
4. Confirm theme colors remain readable in both modes.
5. Test search, filtering, sorting, reset, export, and print actions.
6. Update documentation when behavior changes.

## Dependency policy

The current implementation has no package installation or build step. Avoid introducing dependencies unless they solve a clear requirement that cannot be handled simply with browser-native features.

## Asset changes

Keep referenced asset paths valid and use descriptive filenames for new static assets.
