---
title: "Maintain a site with an agent — TeqCMS"
description: "Give an external agent tasks for content, translations, CSS, templates, and navigation; review the changes in Git before publishing."
date: 2026-09-30
---

# Give the agent a site task

TeqCMS is designed for a file workflow an external AI agent can use directly. The agent edits Markdown, locale files, templates, and CSS; I set the direction and review the result.

## Describe the outcome

Include the page purpose, audience, factual sources, languages, and style constraints. Keep lasting project rules in text files the agent can read. For example:

> Add a product page for developers. Prepare Russian and English Markdown, use our existing design, add the page to navigation, and show me the Git diff and rendered result.

You can also ask the agent to adapt translations, reorganize documentation, or change the site's presentation. Agree which files and actions are in scope.

## Review before publishing

- Check text and product claims against their sources.
- Inspect the Git diff: content, metadata, translations, templates, and CSS.
- Open pages on desktop and mobile; check links and language switching.
- Regenerate `llms.txt` and `sitemap.xml` after publication changes.
- Keep publication approval with the site owner.

The CMS serves the prepared files. A running agent or LLM API is not needed to read the site; you can also edit the files manually.

[ADSM](/en/docs/adsm) explains how I organize the project's instructions. [This site's repository](https://github.com/flancer32/teq-cms-promo) shows the files and review history.
