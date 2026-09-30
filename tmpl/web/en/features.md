---
title: "How TeqCMS works — TeqCMS"
description: "One Markdown source, two reading formats, and a Git workflow for an agent to maintain content, translations, design, and page structure."
date: 2026-09-30
---

# One source for people and agents

TeqCMS is a CMS for product websites, documentation, and multilingual project sites maintained through files and Git. I designed it for working with an external AI agent.

## Same content, different presentation

A page's Markdown file holds its text and metadata. Agents read that source; people read HTML rendered from it through shared templates. There is no separately authored agent version. Each language has its own maintained Markdown file, shared by that language's two representations.

Compare this page's [Markdown source](/en/features.md) with its [HTML page](/en/features.html), or open the [Russian HTML page](/ru/features.html).

## Two discovery paths

- **Agents:** [llms.txt](/llms.txt) lists public resources they can follow to read Markdown.
- **People:** [sitemap.xml](/sitemap.xml) helps search engines discover HTML pages; readers arrive through search results or site navigation.

Both paths describe the same published content. These files aid discovery; they do not guarantee that every crawler or agent will use them. [URL and language selection](/en/docs/locales) explains HTTP behavior and explicit format links.

## A site your agent can maintain

Give the agent a task and project instructions. It can edit:

- **Content:** create and update Markdown pages.
- **Languages:** translate and adapt separate locale files.
- **Design:** change CSS and shared presentation templates.
- **Structure:** organize pages, menus, and links.

I review the Git diff and the rendered pages before publishing. The agent runs outside TeqCMS; the CMS serves prepared files without an LLM API or an agent running on the server.

## Files you control

Content, translations, templates, and CSS stay in Git. Review a change, restore a version, or move the sources to another project. HTML is rendered on the server; reading it needs no browser application. Publishing needs no content database or admin panel.

This workflow fits technical owners and small teams comfortable with Git and an agent. Contributors who need visual page editing should evaluate that requirement before choosing TeqCMS.

<div class="actions"><a class="btn" href="/en/docs/install">Try the working example</a><a class="btn btn-secondary" href="https://github.com/flancer32/teq-cms">Read the CMS code →</a></div>

[See real websites](/en/examples) or [discuss your project](/en/contacts).
