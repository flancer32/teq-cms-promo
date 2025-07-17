# Top-level Context for LLMs

## Purpose

This document is intended for an LLM agent performing tasks related to content generation, localization, and maintenance within this project. It defines the basic rules, describes the file structure, project goals, and the interaction format with the Operator. The agent operates autonomously, relying on the provided context, and produces results in the form of file changes in the project structure.

---

## Project Goals

- Demonstrate how TeqCMS can be used to build a real multilingual website without build steps or server logic.
- Serve as a structural and content example suitable for copying and adaptation.
- Combine demo, documentation, and practical examples in a single repository.
- Use LLM to generate, translate, and edit content within a git-based workflow.

---

## Architectural Principles

- This project contains only the content layer: page templates, texts, and translations.
- All CMS logic and the Nunjucks template engine are provided through dependencies and configuration.
- The project has no custom code — everything is implemented via files and external packages.
- The agent works exclusively with templates and text — architectural or system-level changes are not permitted.

---

## Project File Layout and Agent Scope

### `/agent/notes/`

- Final task reports written by the agent.
- Each `agent/notes/{task-id}.md` file contains consolidated observations, recommendations, and serves as a feedback channel to the Operator.

### `/ctx/`

- Cognitive context for page generation, cloned from the external repository `@flancer32/teq-cms-promo-ctx`.
- Contains generation instructions, tone, audience descriptions, and content goals.
- Instructions for each page are located at:

```
./ctx/tmpl/web/{locale}/{path}/{name}.gen.md
```

Example: to generate `tmpl/web/ru/v2/about.html`, use `ctx/tmpl/web/ru/v2/about.gen.md`.

- The file `ctx/AGENTS.md` defines the rules and constraints for generation tasks. It must be treated with the same authority as this file (`./AGENTS.md`) and strictly followed by the agent.

### `/docs/`

- Internal documentation for the project.
- Can be edited by the agent as part of a defined task (descriptions, structure, goals, etc.).

### `/etc/`

- Configuration examples for external systems — not subject to modification.
- The agent **must not** edit this directory without explicit instruction.

### `/tmpl/`

- Main working area: HTML templates (`tmpl/web/{locale}/`) and their associated instructions (`*.prompt.md`).
- This is where pages are created, edited, and localized.

### `/var/teq-cms/db_translate.json`

- Service file used to track translation status.
- The agent **must not** modify this file manually.

### `/web/`

- Public static assets (JS, CSS, images) shared across all locales.
- The agent may use these, but must not modify them unless explicitly instructed.

---

## Agent Responsibilities

This project uses a single universal LLM agent that performs tasks set by the Operator in an autonomous manner.  
The agent produces results in the form of changes to the repository’s files. After completing the task, it waits for Operator feedback and the next task.

Agent responsibilities include:

- Generating new pages or sections based on defined goals;
- Creating HTML templates in the base locale, including initial text and structure;
- Suggesting changes to existing templates;
- Maintaining project documentation (`README.md`, `docs/`);
- Initiating translation of updated templates into other locales (without directly editing `db_translate.json`).

The agent **must not**:

- Modify configuration or service files (`etc/`, `db_translate.json`);
- Alter CMS behavior, the template engine, or external packages;
- Create or modify code outside the content layer of the project;
- Trigger translation of templates into other locales — initiating translation is the responsibility of the Operator;
- Take action outside the scope of the assigned task or without clear context from the Operator.

---

## Communication Protocol

The agent must record its feedback and observations for each task using two methods:

### 1. Inline Comments in Templates

- Used for specific remarks tied to particular changes.
- Comment prefix: `AGENT:` — to make them easily searchable by the Operator.

Example:

```html
<!-- AGENT: consider shortening this introduction block -->
```

### 2. Final Report in `agent/notes/YYYY/MM-XX-{name}.md`

* One file per task.
* Structure: short summary of the result, key observations, suggestions, checklist.
* Used to provide a general overview to the Operator after task completion.

Example:

```md
# Task: Add "Team" Page

## Summary

Generated `tmpl/web/ru/team.html` and localization skeletons.

## Observations

- Content overlaps with `about.html` in some parts.
- Header structure could be simplified.

## Suggestions

- Consider merging sections or using reusable includes.
```

---

## Execution and Handoff

The agent completes the assigned task within a single cycle. Upon completion:

* All changes are written into the project’s file structure.
* Agent feedback is recorded in `agent/notes/YYYY/MM-XX-{name}.md` and as `AGENT:` inline comments.
* The agent waits for Operator response or a new task.

---
 