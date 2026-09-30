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

## Choose format and language explicitly

| URL | Representation |
| --- | --- |
| [`/en/features.html`](/en/features.html) | HTML from the exact English source |
| [`/ru/features.html`](/ru/features.html) | HTML from the exact Russian source |
| [`/en/features.md`](/en/features.md) | Exact English Markdown, including metadata |
| [`/ru/features.md`](/ru/features.md) | Exact Russian Markdown, including metadata |
| [`/features.md`](/features.md) | Neutral Markdown, not necessarily the reader’s language |

Use `.html` when you expect a rendered page and `.md` when you expect the source. Add a locale prefix to request a specific language. For the home page, use `/en/index.html`, `/ru/index.html`, `/en/index.md`, or `/ru/index.md`.

## Links without an extension

An extensionless page URL such as `/about`, `/features`, or `/en/features` selects its representation from the client’s HTTP request: HTML for a person’s browser, Markdown for a client that supports it. It does not guarantee one format for every visitor.

A locale prefix fixes the language, independently of the selected format. Without a locale prefix, HTML uses the first supported language matching the request’s `Accept-Language` preferences, then the configured default locale if no language matches. This also applies to the home URL `/`. It does not make `/features` a guaranteed English Markdown link.

## Neutral Markdown has a separate source policy

For `/features.md`, an unlocalized source under `tmpl/web/` takes priority. When it is absent, English wins even if the human-facing default is Russian; next comes the configured default-locale source. If none exists, the neutral Markdown resource returns 404. `Accept-Language` selection for HTML does not change this Markdown policy. Use `/ru/features.md` when you need the Russian source.

Localized HTML requires the exact locale source and an available presentation template. A missing Russian source cannot become an English page at `/ru/features.html`. Localized `.md` URLs also require their exact source.

## Keep links with the reader

Ordinary navigation links preserve the active locale and can omit extensions when no particular format is promised. Demonstrations and links labeled “HTML” or “Markdown” use explicit extensions. The header’s language switcher preserves the current publication; the footer’s Markdown link opens its source in the current language.

[Maintain language variants](/en/docs/translate) or [open a live example](/en/features).
