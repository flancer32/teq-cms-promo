# Task: Fix ADSM RU Page

## Summary

Replaced escaped Unicode sequences in `tmpl/web/ru/v2/docs/adsm.html` with regular Cyrillic characters and corrected typos. The page now displays properly.

## Observations

- Previous content used escaped sequences like `\u0414` causing unreadable text.
- Updated table row to "Ничего не нужно делать вручную".

## Suggestions

- Review other pages for similar encoding issues.
