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

For this repository, the script invokes `teq web:start`; the CLI loads the project’s `.env`. In another host, `npx teq web:start` requires that host's configuration.

## Regenerate discovery files

After content changes, use the same publication and locale configuration as the server, then run:

```sh
npm run generate
```

The command writes `web/robots.txt`, `web/llms.txt`, and `web/sitemap.xml`. It does not translate content.

- `llms.txt` lists each available neutral publication once for Markdown clients. Its extensionless URLs do not promise Markdown to every visitor; use `.md` when opening a source explicitly.
- `sitemap.xml` lists canonical localized publication URLs. An extensionless canonical URL identifies the publication; request-based selection can vary its format.
- `robots.txt` contains crawl directives and the sitemap reference.

The server and generator load the same `.env`; see [configuration](/en/docs/config). Review generated files together with the content before publishing.
