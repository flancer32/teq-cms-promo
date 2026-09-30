---
name: project-conventions
description: Project conventions for every task in the teq-cms-promo repository and its separate ctx worktree.
---

# Project Conventions

`AGENTS.md` takes precedence over this skill. When working in `ctx/`, also follow `ctx/AGENTS.md` and the applicable context README files.

## Repositories

- The site root (`flancer32/teq-cms-promo`) and `ctx/` (`flancer32/teq-cms-promo-ctx`) are separate Git repositories. Check status and diffs separately; do not combine their commits or pushes.
- `ctx/` is the cognitive context for page generation. Read the relevant `ctx/docs/code/browser/ssr/prompts/{locale}/.../*.gen.md` instructions before editing a page when they exist.

## Workflow

- Work on each repository's `main` branch. This project convention overrides any GitHub skill instruction to create a separate branch.
- At the start of a task, check upstream state in the site root and `ctx/` when applicable. Safely fast-forward each local `main` when it is behind; inspect each affected working tree before changing files.
- Do not commit or push unless the user requests it.
- For `npm` or `git` operations known in advance to require network access, request `sandbox_permissions: "require_escalated"` on the initial command. Keep local read-only Git inspection and local npm checks in the sandbox.
- Before reading a project-local skill, inspect its directory entry and resolve symlinks. The TeqFW skills in `.agents/skills/` point into `node_modules`.

## Content boundary

- This repository owns the content layer. Keep pages and shared templates in `tmpl/`; CMS logic and Nunjucks come from dependencies. Do not add custom runtime code or change external packages for content tasks.
- Do not edit `etc/` or `web/` under ordinary content tasks. `web/` requires an explicit instruction. Translation execution belongs to the operator; do not run `npm run translate`.
- Summarize task outcomes in the conversation; no per-task report files are required. Use `AGENT:` HTML comments when a template needs a specific inline remark.

## Validation

- For content changes, check the affected templates and locale links against their context instructions, then run `git diff --check` in each affected repository.
- Run relevant tests and type checks after code or configuration changes. The current root `package.json` has no test or typecheck script; do not substitute the translation command for validation.

## GitHub and shared memory

- Run every `gh` command with `sandbox_permissions: "require_escalated"`; its credentials are in the OS keyring. Use actual line breaks in multiline GitHub text, never literal `\n`.
- `flancer32/ai-memo` is the shared cross-project issue tracker and memory. For a user-authorized issue about this site, name `flancer32/teq-cms-promo` as the source and identify each repository expected to resolve it; use `project/flancer32/teq-cms-promo/` for notes.
- Link commits from another repository to their GitHub commit page using its full URL.
