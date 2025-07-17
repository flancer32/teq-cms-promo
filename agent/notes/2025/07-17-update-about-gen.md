# Task: Update about page with new gen instructions

## Summary

Rewrote `tmpl/web/ru/v2/about.html` to highlight LLM-based site creation and TeqCMS file-first architecture. Content now follows `about.gen.md` focusing on AI-driven workflow, absence of DB and UI, and benefits for developers.

## Observations

- Added sections describing why TeqCMS works well with LLM agents.
- Kept AGENT comment to mark automatic generation.
- Start script runs but shows no CLI help; interrupted manually.

## Suggestions

- Provide explicit CLI options in docs for `npx teq-cms web`.
