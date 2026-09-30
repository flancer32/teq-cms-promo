---
title: "Working with an external agent — TeqCMS"
description: "Practical guidance for working with an external agent: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Give a task. Review the files.

An agent uses the same Markdown and template files you can edit yourself. It works outside the CMS runtime. I use it to prepare changes, then decide what to publish.

## Make the task concrete

Include the page purpose, target audience, factual sources, languages, and a clear description of the result. For example:

> Add a page explaining the three ways I help with TeqCMS: consultation, implementation, and ongoing support. Write in my first-person voice. Use the existing contact details and preserve locale-aware links.

## Review what matters

- Read the proposed text and check product claims against the engine documentation.
- Inspect the Git diff, including metadata and language variants.
- Open the pages on a narrow screen and test the language switcher.
- Keep approval for publishing and other external actions with the site owner.

The agent is optional. The CMS continues to serve the files without an agent process or LLM API running.

[Learn how ADSM organizes project instructions](/en/docs/adsm).
