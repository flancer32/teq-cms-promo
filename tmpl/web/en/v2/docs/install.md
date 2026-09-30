---
title: "Run your first TeqCMS site — TeqCMS"
description: "Practical guidance for run your first teqcms site: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Start with a working example

The shortest path to understanding TeqCMS is to run this site's source locally. You'll need Node.js 20 or newer, npm, and Git.

## Run this promotional site

```sh
git clone https://github.com/flancer32/teq-cms-promo.git
cd teq-cms-promo
npm ci
cp .env.sample .env
npm start
```

Open `http://localhost:3000/en/v2/index` or `http://localhost:3000/ru/v2/index`. The sample selects Nunjucks, English and Russian, and the publication configuration. Set `TEQ_CMS__BASE_URL=http://localhost:3000` in your `.env` for local canonical URLs.

## Make an edit you can see

Edit `tmpl/web/en/v2/index.md`, then request the English page again. Edit the Russian file independently. Page bodies are Markdown, not Nunjucks templates.

To add a page such as `v2/hello`, create `tmpl/web/en/v2/hello.md`:

```markdown
---
title: Hello — my site
description: My first TeqCMS publication.
date: 2026-09-30
---
# Hello

This page comes from a Markdown file.
```

The existing presentation handles `/en/v2/hello`; `/v2/hello` returns the authored Markdown. Create the corresponding Russian file to make `/ru/v2/hello` available.

## Move toward your own site

Adapt the content and templates, configure your own public base URL, and review your Git diff. The [configuration guide](/en/v2/docs/config) explains the settings. Regenerate discovery files after changing publications; see [CLI](/en/v2/docs/cli).

For a new host application rather than this example, follow the [engine publication guide](https://github.com/flancer32/teq-cms/blob/main/docs/publications.md) and its host configuration. [I can help with setup or migration](/en/v2/contacts).
