# Task: Migrate and Integrate v2 Site

## Summary

- Moved v2 pages into `tmpl/web/ru/v2/`.
- Added separate layout and navigation templates (`layout-v2.html`, `nav-v2.html`).
- Refactored all v2 pages to extend the new layout and wrap content in Nunjucks blocks.
- Navigation for v2 pages now points to `/v2/` paths.

## Observations

- Original v2 files were very minimal; migration only required template wrappers.
- `nav-v2.html` links to some pages that do not yet exist (features subpages, contact).

## Suggestions

- Consider creating v2-specific pages for all nav links or adjust navigation.
