---
title: "Serving and discovery commands — TeqCMS"
description: "Practical guidance for serving and discovery commands: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Two commands, two jobs

The standard TeqFW CLI serves the website and generates discovery files. Run commands from the host application's root.

## Serve the site

```sh
npm start
```

For this repository, the script configures publication families, locales, and Nunjucks, then invokes `teq web:start`. In another host, `npx teq web:start` requires that host's configuration.

## Regenerate discovery files

After content changes, use the same publication and locale configuration as the server, then run:

```sh
npx teq cms:generate
```

The command writes `web/robots.txt`, `web/llms.txt`, and `web/sitemap.xml`. It does not translate content.

- `llms.txt` lists each available neutral Markdown resource once.
- `sitemap.xml` lists available localized HTML publications.
- `robots.txt` contains crawl directives and the sitemap reference.

This site's start-script settings are not automatically inherited by a separate CLI invocation. Supply the matching host configuration first; see [configuration](/en/v2/docs/config). Review generated files together with the content before publishing.
