---
title: "Configuration — TeqCMS"
description: "The CLI host loads environment settings. Use TEQFWTMPLALLOWEDLOCALES and TEQFWTMPLDEFAULTLOCALE for locales. Set TEQCMSBASEURL and explicitly configure TEQCMSPUBLICATIONFAMILIES to publish Markdown-ba"
date: 2026-09-30
---

# Configuration

The CLI host loads environment settings. Use `TEQFW_TMPL__ALLOWED_LOCALES` and `TEQFW_TMPL__DEFAULT_LOCALE` for locales. Set `TEQ_CMS__BASE_URL` and explicitly configure `TEQ_CMS__PUBLICATION_FAMILIES` to publish Markdown-backed pages. Neutral Markdown uses a locale-free URL and prefers the maintained English source, then the default locale.

The optional agent contact inbox is enabled with `TEQ_CMS__AGENT_MESSAGE_ENABLED=true`.
