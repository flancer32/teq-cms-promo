---
title: "About the Project — TeqCMS v2"
description: "About the Project — TeqCMS v2"
date: 2026-09-30
---

# A site built by an AI agent

- I formulate tasks and the agent generates pages over several iterations.
- The agent creates structure, texts and translations instead of me typing them manually.
- I use [OpenAI Codex](https://openai.com/codex/) as the agent.
- This site shows TeqCMS in use with an external agent.

## Why it works

- TeqCMS has no database: every page is a file on disk.
- There is no admin panel, so I edit content directly.
- This freedom lets any tool, including an LLM, work with these files.

## Content as code

- I keep pages and translations together in git — [teq-cms-promo](https://github.com/flancer32/teq-cms-promo).
- The HTML structure is clear and easy to generate.
- Every edit is tracked in commit history.

## LLM in the creation process

- The agent isn't embedded in the CMS; it simply writes files.
- New pages and sections appear through dialogue: I ask, the agent answers.
- The CMS shows exactly what the agent generated, without extra layers.

## What the CMS does

- Renders pages on the server with Nunjucks or Mustache.
- Detects locale from the URL and loads the proper templates.
- Does not manage content — it merely displays it.

## Who it's for

- Developers working with LLMs and generative tools.
- Teams that prefer a "content as code" approach.
- Anyone who wants AI to be a full participant in website creation.

## Give it a try

- Check the source code on GitHub: [teq-cms](https://github.com/flancer32/teq-cms) — the engine, [teq-cms-promo](https://github.com/flancer32/teq-cms-promo) — this site, [my personal site](https://wiredgeese.com).
- Explore the template and file structure.
- Set a task for the agent and add your own page in a few steps.
