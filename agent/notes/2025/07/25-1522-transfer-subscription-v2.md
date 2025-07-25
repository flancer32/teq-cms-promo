# Task: Transfer subscription page to v2

## Summary

- Copied subscription page to `tmpl/web/ru/v2` and `tmpl/web/en/v2`.
- Updated page layout to `layout-v2.html` and titles include `TeqCMS v2`.
- Added navigation links to subscription page in `nav-v2.html` for both locales.

## Observations

- Original pages used `layout.html`; the new versions extend `layout-v2.html`.
- No context `.gen.md` files exist for subscription pages.

## Suggestions

- Consider adding generation instructions for these pages in `ctx/site` for completeness.
