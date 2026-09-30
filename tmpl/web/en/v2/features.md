---
title: "What TeqCMS can do — TeqCMS"
description: "Markdown sources, Git history, multilingual HTML, shared templates, and public Markdown URLs. Explore the capabilities and the projects TeqCMS fits."
date: 2026-09-30
---

# Markdown at the source. HTML at the edge.

I built TeqCMS around a simple idea: keep authored content readable and reviewable, then give each reader the representation they need.

## Files you can own and move

Content lives in Markdown files. Layout lives in shared templates. You can work in your editor, inspect the repository, and keep changes in Git. Publishing content requires no CMS database or admin panel.

## One publication, explicit language variants

Each language is a maintained source file at the same path in its locale directory. English and Russian pages can share a layout while using wording tailored to their audiences. A requested HTML page requires its exact language source; an absent translation returns 404.

## HTML for people, Markdown for agents

TeqCMS publishes two representations with different URLs:

| Open this example | What you receive |
| --- | --- |
| [English page](/en/v2/features) | HTML rendered from the English source |
| [Russian page](/ru/v2/features) | HTML rendered from the Russian source |
| [Public Markdown](/v2/features) | The authored source, including metadata |

The neutral Markdown URL prefers English, then the configured default locale. Its representation is determined by the URL, independently of the browser or agent making the request.

## Shared presentation, server rendering

The host selects its template engine and owns the presentation templates. This site uses Nunjucks. A shared layout keeps navigation, metadata, and styling consistent while TeqCMS turns each Markdown body into HTML on the server.

## An agent can use the same files you use

An external agent can read, write, adapt, and review the files. I can examine the resulting diff before publishing. TeqCMS serves those prepared sources; it doesn't run an agent or call a translation API during page requests.

## Discovery from the publication corpus

The engine's `cms:generate` command can produce `robots.txt`, `llms.txt`, and `sitemap.xml` from configured public publications. The site owner regenerates these files after content changes. Private instructions are outside the public publication corpus.

## Where it fits

I use this model for promotional websites and see a clear fit for documentation, developer portals, and multilingual project sites maintained through files and Git. If your main requirement is a visual editing interface for nontechnical contributors, assess that workflow before adopting TeqCMS.

<div class="actions"><a class="btn" href="/en/v2/examples">Inspect real applications</a><a class="btn btn-secondary" href="/en/v2/docs/install">Read the setup guide</a></div>

[Discuss whether it fits your project](/en/v2/contacts).
