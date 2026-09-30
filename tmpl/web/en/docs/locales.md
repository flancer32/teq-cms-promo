---
title: "Locales and publication URLs — TeqCMS"
description: "Practical guidance for locales and publication urls: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# A language is a source, not a guess

Create one Markdown file per maintained language at the same relative route. For this publication:

```text
tmpl/web/en/features.md
tmpl/web/ru/features.md
```

## Two representations

| URL | Representation |
| --- | --- |
| `/en/features` | HTML from the exact English source |
| `/ru/features` | HTML from the exact Russian source |
| `/features` | Raw Markdown, English first, then default locale |

An unlocalized source under `tmpl/web/` takes priority for neutral Markdown. When it is absent, English wins even if the human-facing default is Russian. If neither English nor the configured default source exists, the neutral resource returns 404. Other languages are not substituted.

Localized HTML requires the exact locale source and an available presentation template. A missing Russian source cannot become an English page at the Russian URL. Localized `.md` URLs return the exact locale source; `.html` aliases render the same HTML as the extensionless URL.

## Keep links with the reader

Use locale-prefixed internal HTML links. The locale switcher uses available HTML alternate URLs to preserve the current page. The neutral Markdown link is a separate representation, not a language switch.

[Maintain language variants](/en/docs/translate) or [open a live example](/en/features).
