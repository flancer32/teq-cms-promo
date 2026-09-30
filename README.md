# @flancer32/teq-cms-promo

**Official promo site for [TeqCMS](https://github.com/flancer32/teq-cms)** — a file-based CMS for agents building multilingual websites. Agents maintain localized Markdown and templates in Git; TeqCMS renders HTML for people and can expose selected Markdown to agents.

---

## Purpose

This repository serves as the live, reproducible implementation of TeqCMS in action.  
It illustrates how to:

- Build and manage a multilingual SSR site using files only
- Use modular components with dependency injection and late binding
- Let agents author and review each locale's source files
- Generate discovery files for both human and agent readers

---

## Highlights

- ✅ **Agent-first authoring**: agents maintain content and locale variants in Git
- ✅ **Server-side rendering** with [Nunjucks](https://mozilla.github.io/nunjucks/)
- ✅ **Modular monolith**: clean FQN-based module resolution (`@teqfw/di`)
- ✅ **No build step**: install dependencies and run `npm start`
- ✅ **Git-based structure**: all pages, templates, and translations are versioned
- ✅ **Markdown publications**: opt-in HTML rendering and machine-readable sources

---

## Requirements

- Node.js ≥ 20
- A working knowledge of:
    - TeqCMS plugin structure
    - File-based SSR site organization
    - Git-based workflows for content and code
- Optional: an agent-enabled development environment (e.g. Codex)

---

## Repository Structure

- `tmpl/` — Markdown sources and shared HTML templates by locale (`tmpl/web/en/`, `tmpl/web/ru/`, etc.)
- `web/` — static assets (CSS, JS, images)
- `ctx/` — cognitive context for agents working on this site

The CMS and template runtime dependencies track their GitHub `main` branches under their regular package names. Run `npm update` to refresh the locked GitHub revisions, then `npm start` to run the site. `npm ci` reproduces the revisions recorded in `package-lock.json`. These runtime dependencies are also installed with `--omit=dev`; no separate development setup or package linking is required.

---

## Live Site

📍 [https://cms.teqfw.com/](https://cms.teqfw.com/)

---

## License

Apache-2.0 © Alex Gusev (`@flancer32`)

## Markdown-first publishing

Run `npm start` and visit `/en/v2/index` or `/ru/v2/index` for HTML. `/v2/index` returns the complete English Markdown source with `Content-Type: text/markdown`. URL paths determine representation; no special User-Agent or Accept header is needed.

All 56 localized pages are authored in `tmpl/web/{locale}/{family}/{route}.md`. Families are `v2`, `docs`, `features`, and `pages`; the root-level legacy pages now live in `pages/`. Each source requires YAML `title`, `description`, and `date` (ISO calendar date). The date records this migration unless a publication supplies its own authored date. Optional metadata remains available to the presentation.

`publication.html` renders the derived Markdown body inside the shared layout with navigation, responsive styles, SEO metadata, canonical URLs, language alternates, and a Markdown alternate. The responsive author portrait uses a small trusted HTML block inside its Markdown source. Locale variants remain explicit files in Git.

Publication URLs are extensionless. Old family URLs ending in `.html` return 404; update bookmarks and deployment links. Root entry templates lead to the localized `/v2/index` page. No per-page HTML content remains.

`npm start` enables these families, English/Russian locales, and Nunjucks. It uses `TEQ_CMS__BASE_URL` from the process environment when supplied, defaulting to `https://cms.teqfw.com`. For direct `npx teq web:start` or `npx teq cms:generate`, configure the same settings shown in `.env.example`. After content changes regenerate `web/robots.txt`, `web/llms.txt`, and `web/sitemap.xml` using the CMS discovery command.
