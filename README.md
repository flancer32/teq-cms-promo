# TeqCMS promotional site

This bilingual site demonstrates TeqCMS with Markdown sources, server-rendered HTML, shared Nunjucks templates, Git review, and optional external-agent authoring.

## Run the site

Requires Node.js 20 or newer, npm, and Git.

```sh
npm ci
cp .env.sample .env
npm start
```

Adjust the public configuration examples before deployment. For local canonical links, set `TEQ_CMS__BASE_URL=http://localhost:3000` in `.env`. The CLI loads the project dotenv file once; process environment values override matching keys. No configuration values are embedded in npm scripts. `npm start` runs `teq web:start`.

Open `/en/v2/index` or `/ru/v2/index`. The root and locale entry pages lead to this primary promotional content. The old `docs`, `features`, and `pages` content directories and their presentation templates have been removed.

## Configuration ownership

`.env.sample` documents every dotenv setting consumed by the installed Teq dependencies:

- `@flancer32/teq-cms`: public base URL, publication families, optional private agent inbox, and optional inbox token.
- `@flancer32/teq-tmpl`: maintained locales and default locale. The standalone CMS host owns the `TEQFW_TMPL__ENGINE` selection.
- `@teqfw/web`: bind host, port, transport type, and optional TLS certificate/key/CA paths. Its `TLS` object setting is for typed Sources, not a dotenv string.
- `@teqfw/log`: optional policy-file path through the opt-in cfg bridge. The installed standalone CMS host does not apply this bridge; the sample leaves it commented out.
- `@teqfw/cfg`, `@teqfw/cli`, and `@teqfw/di`: no package-owned dotenv settings. Configuration Sources, computed CLI facts, and DI metadata are separate contracts.

The sample contains only public examples. Keep operational dotenv values outside Git. Agents must not read or load the operational `.env`; validation uses the non-secret sample explicitly.

## Content and presentation

All 36 localized publications live under `tmpl/web/{en,ru}/v2/`. Each Markdown source has YAML `title`, `description`, and ISO calendar `date`. The corresponding locale's `publication.html` renders it through `inc/layout.html`, `inc/nav.html`, and `inc/promo-styles.html`.

The locale-neutral URL `/v2/about` returns authored English Markdown, including front matter. `/en/v2/about` and `/ru/v2/about` render their exact-locale HTML. Metadata supplies canonical HTML, available language alternates, and the neutral Markdown alternate. The mobile navigation uses a native disclosure with a `☰` icon and an accessible localized name.

## Discovery

After editing publications, run:

```sh
npm run generate
```

The generator loads the same `.env` as the server and refreshes `web/robots.txt`, `web/llms.txt`, and `web/sitemap.xml`. Review the generated files with the content they describe.

## Root-level routes: delegated engine work

Support for `/about`, `/about.md`, `/en/about`, `/en/about.html`, and `/en/about.md` is delegated to [TeqCMS issue #31](https://github.com/flancer32/teq-cms/issues/31). The question is whether publication families must be registered or whether all public site pages can use a site-wide publication mode. The current installed engine requires a nonempty family prefix, so this site retains `/v2/` until the package supplies the agreed contract. No host-local runtime workaround is added.

## Repositories and dependencies

`ctx/` is a separate cognitive-context repository. Preserve its Git boundary. The runtime CMS and template dependencies track GitHub `main`; `npm ci` reproduces the revisions in `package-lock.json`. Dependency updates require their own scoped task.

Live site: https://cms.teqfw.com/

## License

Apache-2.0 © Alex Gusev.
