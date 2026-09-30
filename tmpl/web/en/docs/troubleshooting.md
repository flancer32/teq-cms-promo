---
title: "Troubleshooting publication — TeqCMS"
description: "Practical guidance for troubleshooting publication: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Check the source, then the presentation

When a publication returns 404, trace the requested representation rather than assume it uses a language fallback.

## Localized HTML is missing

1. Check the logical route and maintained locale. HTML supports extensionless URLs and `.html` aliases.
2. Check the exact source: `/ru/features` requires `tmpl/web/ru/features.md`.
3. Validate nonempty `title` and `description`, an ISO calendar `date`, and readable Markdown.
4. Confirm the configured presentation exists, is readable, and is not empty. Inspect its template syntax if rendering fails.

The engine does not substitute another locale for missing HTML content. Check local server diagnostics without exposing private configuration or message data.

## Neutral Markdown is missing

Check for a valid English source first, then the configured default-locale source. A source in an unrelated language alone is not enough. Use `/features` for neutral Markdown or `/ru/features.md` for exact Russian Markdown.

## Discovery files are out of date

Ensure `cms:generate` uses the same publication policy and locale configuration as the server, then regenerate after content changes. HTML availability and neutral-source availability are checked separately.

## A language link is missing

The switcher lists available HTML alternates. Check the corresponding source and presentation before adding a manual link to an unavailable route.

[Send me the route, symptoms, and non-secret diagnostics](/en/contacts) if you need help.
