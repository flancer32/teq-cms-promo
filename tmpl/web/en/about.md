---
title: "About this site and its author — TeqCMS"
description: "How Alex Gusev maintains this TeqCMS site with an external AI agent: Markdown, translations, templates, and CSS reviewed in Git."
date: 2026-09-30
---

# I use the workflow I built TeqCMS for

I'm Alex Gusev, the author of TeqCMS. This bilingual site is a working example: I describe the result, an external AI agent prepares the files, and I review what to publish.

## What the agent manages

Content lives in Markdown. Each language has its own source file; shared templates and CSS shape the pages. The agent can write content, prepare translations, and update design and navigation. I check the wording, Git diff, and rendered result.

TeqCMS publishes those prepared sources. It does not run the agent or call an LLM API. I keep project instructions in a separate context repository; [ADSM](/en/docs/adsm) explains that approach.

## Inspect the same publication in two forms

You are reading HTML derived from [this page's Markdown](/en/about.md). Agents discover public sources through [llms.txt](/llms.txt); search engines discover human-facing pages through [sitemap.xml](/sitemap.xml).

- [Site code](https://github.com/flancer32/teq-cms-promo): Markdown, templates, and styles.
- [CMS code](https://github.com/flancer32/teq-cms): publishing and rendering.
- [Other real sites](/en/examples): TeqFW and Wired Geese.

[Discuss a site with me](/en/contacts) or [run this example yourself](/en/docs/install).
