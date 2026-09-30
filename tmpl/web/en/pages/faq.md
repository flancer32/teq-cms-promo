---
title: "Frequently asked questions — TeqCMS"
description: "Practical guidance for frequently asked questions: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Questions before you adopt TeqCMS

## Do I need an agent?

No. You can edit the Markdown and templates in your editor. An external agent is another way to prepare those files.

## Does it translate pages automatically?

No. People or external agents maintain locale files. TeqCMS renders their prepared content and does not call a translation API.

## Does content require a database?

No. Content and templates are files. The standard host runs in Node.js; this is server rendering, not a static-site build step.

## Can agents read the content?

Yes. Configured publication families expose a neutral Markdown URL. On this page it is [the public source](/v2/docs/faq), including authored metadata.

## What if a translation is missing?

The exact-locale HTML URL returns 404. It doesn't silently show another language. Neutral Markdown separately prefers English, then the configured default locale.

## Can I use a visual admin panel?

TeqCMS does not supply one. Assess your contributors' editing workflow if they need visual content editing.

## Is support required?

No. The engine is open source under Apache-2.0. [My implementation help](/en/v2/contacts) and [support subscription](/en/v2/subscription) are optional.

## Can I inspect a real implementation?

Yes. See the [three applications and their repositories](/en/v2/examples).
