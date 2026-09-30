# TeqCMS promotional site

This is the source of [cms.teqfw.com](https://cms.teqfw.com/en/): a bilingual introduction to TeqCMS, with features, real examples, documentation, and author support. It is also a working example of the CMS: the pages you read on the website come from the files in this repository.

TeqCMS keeps content in Markdown and renders HTML on the server. Pages, translations, and presentation stay in Git; there is no content database or admin panel to set up. The [CMS engine](https://github.com/flancer32/teq-cms) and [template package](https://github.com/flancer32/teq-tmpl) provide the runtime. This repository supplies the website's content and appearance.

## Start with one page

Open [the English home source](tmpl/web/en/index.md), then [the rendered home page](https://cms.teqfw.com/en/). The Markdown file contains the words and content sections; the templates give them a header, navigation, and footer.

For a smaller example, follow [about.md](tmpl/web/en/about.md) through the site:

| Address | What you get |
| --- | --- |
| [`/en/about`](https://cms.teqfw.com/en/about) | The English page as HTML. |
| [`/ru/about`](https://cms.teqfw.com/ru/about) | The Russian page from its own source file. |
| [`/about`](https://cms.teqfw.com/about) | The neutral Markdown resource, which selects English on this site. |
| [`/ru/about.md`](https://cms.teqfw.com/ru/about.md) | The exact Russian Markdown source. |

The `.html` addresses are aliases of localized HTML pages; neutral `.md` addresses are aliases of neutral Markdown resources. The home pages use `/en/` and `/ru/`; `/` serves home Markdown.

## Find your way around

| Location | What lives here |
| --- | --- |
| [`tmpl/web/en/`](tmpl/web/en/) and [`tmpl/web/ru/`](tmpl/web/ru/) | English and Russian page sources. `index.md` is home; `features.md`, `examples.md`, and `contacts.md` are ordinary pages; `docs/` contains the public documentation. |
| [`publication.html`](tmpl/web/en/publication.html) | Turns a publication's metadata and rendered Markdown into the shared page layout. Each locale has its own copy. |
| [`inc/layout.html`](tmpl/web/en/inc/layout.html) and [`inc/nav.html`](tmpl/web/en/inc/nav.html) | The page shell and navigation. Change these when a change should affect every page in that locale. |
| [`web/assets/css/`](web/assets/css/) | External styles shared by both languages: `site.css` for the site and `not-found.css` for the prepared 404 presentation. |
| [`web/img/`](web/img/) and [`web/favicon.ico`](web/favicon.ico) | Images and the platform emblem. Files in `web/` are public static assets. |
| [`web/llms.txt`](web/llms.txt), [`web/sitemap.xml`](web/sitemap.xml), and [`web/robots.txt`](web/robots.txt) | Generated discovery files for agents and crawlers. |
| [`.env.sample`](.env.sample) | Public examples of runtime settings: site URL, languages, host, and port. |
| [`package.json`](package.json) and [`package-lock.json`](package-lock.json) | Commands and dependencies. The lockfile pins the engine revisions used by this site. |

The optional local `ctx/` checkout is a [separate repository](https://github.com/flancer32/teq-cms-promo-ctx). It records the site's purpose, structure, and page-writing instructions for humans and agents. It is not published as site content and is not required to run the website. Read [AGENTS.md](AGENTS.md) before using an agent to change this project.

## Make a small change

1. Edit a page's `.md` file. Keep its YAML header (`title`, `description`, and calendar `date`) and use the body for content. The matching path in the other locale is a separate publication; translations are reviewed by the operator.
2. For appearance, edit the shared CSS; for menus or page framing, edit the locale's `inc/` templates. You do not need to change the CMS engine for these edits.
3. Preview the affected English and Russian pages locally, including a narrow screen. Review the Git diff.
4. After adding, removing, or changing publications, run `npm run generate` and review the discovery files it refreshes.

The default CMS publishes the site's Markdown without registering publication families. Leave `TEQ_CMS__PUBLICATION_FAMILIES` unset for this setup. Keep private material outside `tmpl/web/` and `web/`.

## Run locally

Requires Node.js 20 or newer, npm, and Git. From a checkout of this repository:

```sh
npm ci
cp .env.sample .env
npm start
```

Before starting, set `TEQ_CMS__BASE_URL=http://localhost:3000` in your local `.env` so canonical links use your local address. Open [localhost:3000/en/](http://localhost:3000/en/) or [localhost:3000/ru/](http://localhost:3000/ru/).

Settings belong in `.env`; the CLI reads it automatically, and process environment values take precedence. The sample explains the optional settings. Keep operational values outside Git; agents use the public sample for validation and must not read your operational `.env`. `npm ci` installs the locked dependency revisions; dependency updates are a separate maintenance step.

## Learn more

- [TeqCMS documentation](https://cms.teqfw.com/en/docs/overview) — the publishing model and practical setup.
- [Real sites](https://cms.teqfw.com/en/examples) — inspect other applications built with TeqCMS.
- [CMS engine source](https://github.com/flancer32/teq-cms) — routing, rendering, and discovery implementation.
- [Contact the author](https://cms.teqfw.com/en/contacts) — ask about setup, migration, or support.

## License

[Apache-2.0](LICENSE) © Alex Gusev.
