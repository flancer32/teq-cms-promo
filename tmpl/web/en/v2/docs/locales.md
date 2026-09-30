---
title: "Locales and publication URLs — TeqCMS"
description: "Practical guidance for locales and publication urls: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# A language is a source, not a guess

Create one Markdown file per maintained language at the same relative route. For this publication:

```text
tmpl/web/en/v2/features.md
tmpl/web/ru/v2/features.md
```

## Two representations

| URL | Representation |
| --- | --- |
| `/en/v2/features` | HTML from the exact English source |
| `/ru/v2/features` | HTML from the exact Russian source |
| `/v2/features` | Raw Markdown, English first, then default locale |

English wins for neutral Markdown even if the human-facing default is Russian. If neither English nor the configured default source exists, the neutral resource returns 404. Other languages are not substituted.

Localized HTML requires the exact locale source and an available presentation template. A missing Russian source cannot become an English page at the Russian URL. Localized `.md` URLs are unavailable.

## Keep links with the reader

Use locale-prefixed internal HTML links. The locale switcher uses available HTML alternate URLs to preserve the current page. The neutral Markdown link is a separate representation, not a language switch.

[Maintain language variants](/en/v2/docs/translate) or [open a live example](/en/v2/features).
