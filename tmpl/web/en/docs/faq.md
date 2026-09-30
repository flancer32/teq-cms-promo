---
title: "Frequently asked questions — TeqCMS"
description: "Practical guidance for frequently asked questions: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Questions before you adopt TeqCMS

## Do I need an agent?

TeqCMS is designed for agent-managed publishing, but you can edit the same Markdown, templates, and CSS by hand. The CMS serves prepared files without an agent running.

## Does it translate pages automatically?

No. People or external agents maintain locale files. TeqCMS renders their prepared content and does not call a translation API.

## Does content require a database?

No. Content and templates are files. The standard host runs in Node.js; this is server rendering, not a static-site build step.

## Can agents read the content?

Yes. Open [this page’s English Markdown source](/en/docs/faq.md), including authored metadata. The `.md` extension requests Markdown explicitly. Extensionless URLs select HTML for people or Markdown for clients that support it; [URL selection](/en/docs/locales) explains language choices too.

## What if a translation is missing?

The exact-locale HTML URL returns 404. It doesn't silently show another language. Without a locale prefix, HTML selects the first supported language matching `Accept-Language`, then the default. Neutral `.md` separately selects an unlocalized source, then English, then the default locale.

## Can I use a visual admin panel?

TeqCMS does not supply one. Assess your contributors' editing workflow if they need visual content editing.

## Is support required?

No. The engine is open source under Apache-2.0. [My implementation help](/en/contacts) and [ongoing support](/en/subscription) are optional.

## Can I inspect a real implementation?

Yes. See the [three applications and their repositories](/en/examples).
