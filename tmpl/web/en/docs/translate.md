---
title: "A reviewable localization workflow — TeqCMS"
description: "Practical guidance for a reviewable localization workflow: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Give each audience a maintained source

I treat locale variants as authored content in Git. An external agent can help adapt the wording, but the CMS publishes prepared files and does not call an LLM translation API or run translation jobs.

## A practical sequence

1. Define the page's purpose, factual claims, links, and intended audience.
2. Prepare the corresponding Markdown file at the same route in each target locale.
3. Review language, metadata, contacts, and internal links. Adapt the phrasing while preserving the meaning.
4. Check both rendered pages and the language switcher before publishing.
5. Regenerate discovery files when the publication corpus changes.

Russian is the source language for this site. I maintain its English counterpart with the same page purposes; the operator controls when localization work is performed.

## What stays aligned

Keep route paths, product facts, contact details, and calls to action equivalent. Use the active locale in internal links. Each file needs nonempty `title` and `description` plus an ISO calendar `date` in front matter.

[See the agent workflow](/en/docs/dev-llm) or [ask me to help organize yours](/en/contacts).
