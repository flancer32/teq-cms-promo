---
title: "Host configuration — TeqCMS"
description: "Practical guidance for host configuration: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Configure a Markdown website

The CLI host loads configuration once. TeqCMS owns the `TEQ_CMS` namespace; locale and server settings belong to their respective packages.

## Publication settings

| Setting | Purpose |
| --- | --- |
| `TEQ_CMS__BASE_URL` | Absolute public base URL without a path |
| `TEQ_CMS__PUBLICATION_FAMILIES` | Legacy selected-section mode; leave unset for site publication |
| `TEQFW_TMPL__ALLOWED_LOCALES` | Maintained language codes |
| `TEQFW_TMPL__DEFAULT_LOCALE` | Default language and secondary neutral-source choice |
| `TEQFW_TMPL__ENGINE` | Template engine choice in the standalone CMS host |

An example configuration for a whole-site host:

```dotenv
TEQ_CMS__BASE_URL=https://example.com
TEQFW_TMPL__ALLOWED_LOCALES=en,ru
TEQFW_TMPL__DEFAULT_LOCALE=en
TEQFW_TMPL__ENGINE=nunjucks
```

Without a nonempty legacy family list, TeqCMS publishes Markdown across `tmpl/web/`. Sources such as `tmpl/web/en/about.md` and `tmpl/web/en/docs/install.md` need no family registration. The default presentation is `publication.html`. Everything in the public template tree is public; keep private instructions outside it. A nonempty legacy family list selects compatibility mode for selected sections.

Copy `.env.sample` to `.env` and adjust the settings there. Both `npm start` and `npm run generate` use the same CLI-loaded configuration. Process environment values override matching dotenv keys.

## Optional agent inbox

`TEQ_CMS__AGENT_MESSAGE_ENABLED` enables a private file inbox and defaults to false. It is not an email service. The site owner arranges how to read messages and reply. Consult the [engine guide](https://github.com/flancer32/teq-cms/blob/main/docs/publications.md) before enabling it.

[Check locale behavior](/en/docs/locales) or [resolve a missing page](/en/docs/troubleshooting).
