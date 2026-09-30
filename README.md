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

- `tmpl/` — page templates by locale (`tmpl/web/en/`, `tmpl/web/ru/`, etc.)
- `web/` — static assets (CSS, JS, images)
- `ctx/` — cognitive context for agents working on this site

The CMS and template runtime dependencies track their GitHub `main` branches under their regular package names. Run `npm update` to refresh the locked GitHub revisions, then `npm start` to run the site. `npm ci` reproduces the revisions recorded in `package-lock.json`. These runtime dependencies are also installed with `--omit=dev`; no separate development setup or package linking is required.

---

## Live Site

📍 [https://cms.teqfw.com/](https://cms.teqfw.com/)

---

## License

Apache-2.0 © Alex Gusev (`@flancer32`)
