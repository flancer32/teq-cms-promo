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
- `agent/notes/` — task reports

The package manifest keeps stable CMS and template dependencies for production. Development dependencies `teq-cms-main` and `teq-tmpl-main` track the GitHub `main` branches under separate install names, so `npm ci --omit=dev` retains the stable runtime packages. To work against the main branches, run `npm ci`, `npm run dev:main`, then `npm run start:main`. This temporarily links the main packages to their runtime names. Run `npm ci` again to restore the locked production-compatible installation.

---

## Live Site

📍 [https://cms.teqfw.com/](https://cms.teqfw.com/)

---

## License

Apache-2.0 © Alex Gusev (`@flancer32`)
