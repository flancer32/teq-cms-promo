---
title: "Locales — TeqCMS"
description: "Agents maintain a source file for each locale under tmpl/web/{locale}/. Configure maintained locales with TEQFWTMPLALLOWEDLOCALES. Public Markdown source locales are selected separately with TEQCMSPUB"
date: 2026-09-30
---

# Locales

Agents maintain a source file for each locale under `tmpl/web/{locale}/`. Configure maintained locales with `TEQFW_TMPL__ALLOWED_LOCALES`. Neutral Markdown URLs prefer the maintained English source, then the default locale. Localized HTML requires the exact locale source.
