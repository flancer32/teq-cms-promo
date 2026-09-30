---
title: "Built with TeqCMS — about this site"
description: "See how I use TeqCMS, Git, shared templates, and an external agent to maintain this bilingual website."
date: 2026-09-30
---

# A site you can inspect, not just a product pitch

I’m Alex Gusev, the author of TeqCMS. I use this website to demonstrate the same publishing model I offer to other projects.

## The source is the starting point

The English and Russian texts live in `tmpl/web/en/` and `tmpl/web/ru/`. Markdown holds the page content and metadata; shared Nunjucks templates define the presentation. TeqCMS reads the requested locale and renders the HTML on the server.

The [site repository](https://github.com/flancer32/teq-cms-promo) contains the application’s content and templates. The [engine repository](https://github.com/flancer32/teq-cms) contains the CMS implementation. You can examine both boundaries.

## How I work with an agent

I describe the purpose of a page, the audience, and the constraints. An external agent proposes and edits the files. I review the text, the rendered result, and the Git diff through iterations before deciding what to publish.

The agent works outside the CMS runtime. I can also edit the same files by hand. Content, locale variants, and templates are version-controlled together in the site repository.

## Try the model on this page

1. Open the [public Markdown](/about) to see its authored source.
2. Switch between English and Russian in the header to view the corresponding page.
3. Look at `tmpl/web/{locale}/about.md` in the site repository and compare it with the page you are reading.

## Where the instructions live

I keep the project’s long-term textual context in a separate repository mounted at `ctx/`. It describes the product, page purposes, and working boundaries for agents. I explain this related approach on the [ADSM page](/en/docs/adsm).

[Explore other real applications](/en/examples) or [talk to me about your site](/en/contacts).
