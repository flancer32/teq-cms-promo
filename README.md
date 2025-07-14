# @flancer32/teqcms-promo

**Official promo site for [TeqCMS](https://github.com/flancer32/teq-cms)** — a file-first modular CMS built for
LLM-assisted development.  
This project is built with TeqCMS itself and demonstrates how a real SSR website can be created, localized, and extended
entirely via code and files, with full LLM integration.

---

## Purpose

This repository serves as the live, reproducible implementation of TeqCMS in action.  
It illustrates how to:

- Build and manage a multilingual SSR site using files only
- Use modular components with dependency injection and late binding
- Integrate LLMs to assist with content generation, localization, and maintenance

---

## Highlights

- ✅ **LLM-first architecture**: the site is built, extended and localized using LLMs (e.g. GPT, Codex)
- ✅ **Server-side rendering** with [Nunjucks](https://mozilla.github.io/nunjucks/)
- ✅ **Modular monolith**: clean FQN-based module resolution (`@teqfw/di`)
- ✅ **No build step**: just clone and run (`node .`)
- ✅ **Git-based structure**: all pages, templates, and translations are versioned
- ✅ **AI-localized HTML**: automatic translation of templates using structured prompts

---

## Requirements

- Node.js ≥ 22
- A working knowledge of:
    - TeqCMS plugin structure
    - File-based SSR site organization
    - Git-based workflows for content and code
- Optional:
    - OpenAI-compatible API for localization
    - LLM-enabled development environment (e.g. Codex, AutoDev)

---

## Repository Structure

- `cfg/` — DI configuration and app wiring
- `tmpl/` — page templates by locale (`tmpl/web/en/`, `tmpl/web/ru/`, etc.)
- `web/` — static assets (CSS, JS, images)
- `*.prompt.md` — localized context prompts for AI-based translation
- `db_translate.json` — internal metadata for tracking translation state

---

## Live Site

📍 [https://cms.teqfw.com/](https://cms.teqfw.com/)

---

## License

Apache-2.0 © Alex Gusev (`@flancer32`)
