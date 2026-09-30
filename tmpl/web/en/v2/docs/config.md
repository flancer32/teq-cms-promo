---
title: "Host configuration — TeqCMS"
description: "Practical guidance for host configuration: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Make publication an explicit choice

The CLI host loads configuration once. TeqCMS owns the `TEQ_CMS` namespace; locale and server settings belong to their respective packages.

## Publication settings

| Setting | Purpose |
| --- | --- |
| `TEQ_CMS__BASE_URL` | Absolute public base URL without a path |
| `TEQ_CMS__PUBLICATION_FAMILIES` | JSON list of enabled prefixes and presentation templates |
| `TEQFW_TMPL__ALLOWED_LOCALES` | Maintained language codes |
| `TEQFW_TMPL__DEFAULT_LOCALE` | Default language and secondary neutral-source choice |
| `TEQFW_TMPL__ENGINE` | Template engine choice in the standalone CMS host |

An example configuration for a host with a `docs` family:

```dotenv
TEQ_CMS__BASE_URL=https://example.com
TEQ_CMS__PUBLICATION_FAMILIES=[{"prefix":"docs","presentation":"publication.html"}]
TEQFW_TMPL__ALLOWED_LOCALES=en,ru
TEQFW_TMPL__DEFAULT_LOCALE=en
TEQFW_TMPL__ENGINE=nunjucks
```

Publication families default to an empty list. Prefixes must not overlap or begin with a maintained locale code. Create `tmpl/web/{locale}/docs/` sources and a host-owned `publication.html` presentation before expecting localized HTML.

The promotional site's `npm start` script already supplies its publication and locale settings. Review the script when adapting it; supplying a different family list through the environment alone does not override its assignment.

## Optional agent inbox

`TEQ_CMS__AGENT_MESSAGE_ENABLED` enables a private file inbox and defaults to false. It is not an email service. The site owner arranges how to read messages and reply. Consult the [engine guide](https://github.com/flancer32/teq-cms/blob/main/docs/publications.md) before enabling it.

[Check locale behavior](/en/v2/docs/locales) or [resolve a missing page](/en/v2/docs/troubleshooting).
