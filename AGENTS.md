# Top-level Context for LLMs

## Purpose

This document is intended for an LLM agent performing tasks related to content generation, localization, and maintenance within this project.  
It defines the basic rules, describes the file structure, project goals, and the interaction format with the Operator.  
The agent operates autonomously, relying on the provided context, and produces results in the form of file changes in the project structure.

---

## Project Goals

- Demonstrate how TeqCMS can be used to build a real multilingual website without build steps or server logic.
- Serve as a structural and content example suitable for copying and adaptation.
- Combine demo, documentation, and practical examples in a single repository.
- Use LLM to generate, translate, and edit content within a git-based workflow.

---

## Architectural Principles

- The project contains only the content layer: page templates, texts, and translations.
- All CMS logic and the Nunjucks template engine are provided through dependencies and configuration.
- No custom code is allowed — all logic must be implemented through file operations and external packages.

---

## Project File Layout and Agent Scope

### `/agent/notes/`

- Directory for final task reports.
- Each report is a Markdown file: `agent/notes/YYYY/MM-DD-{task-name}.md`.

### `/ctx/`

- Cognitive context for page generation, imported from the external repo `@flancer32/teq-cms-promo-ctx`.
- Instructions for each page are located at:

```

ctx/tmpl/web/{locale}/{path}/{name}.gen.md

```

### `/docs/`

- Internal documentation editable by the agent when explicitly assigned.

### `/etc/`

- Configuration files — must **not** be modified by the agent.

### `/tmpl/`

- Main working area: templates and their translation prompts.

### `/var/teq-cms/db_translate.json`

- Translation metadata file — must not be edited manually.

### `/web/`

- Public static assets. Changes allowed only by explicit instruction.

---

## Agent Responsibilities

The agent performs tasks autonomously based on Operator instructions.  
Results are committed to the file structure and accompanied by a feedback report.

Allowed actions:

- Generate or update pages and HTML templates;
- Suggest changes in structure, layout, or content;
- Maintain project documentation (`README.md`, `docs/`);
- Initiate translation tasks (but not trigger execution).

Prohibited actions:

- Modify files in `/etc/`, `/web/`, or `db_translate.json`;
- Alter CMS logic or external dependencies;
- Act outside the content layer or without a clear task scope;
- Manually run or trigger translation processes — this must be done by the Operator.

---

## Communication Protocol

Agent feedback is provided in two forms:

### 1. Inline Comments

- Use `AGENT:` prefix in HTML templates for specific remarks.

```html
<!-- AGENT: consider revising this paragraph -->
```

### 2. Final Report (Mandatory)

* One file per task, saved as: `agent/notes/YYYY/MM-DD-{task-name}.md`.
* The final report is **mandatory** for **every task**. Tasks submitted without a report are considered incomplete and will be rejected.
* Contents include:

    * Task summary;
    * Key observations;
    * Suggestions or concerns;
    * Optional checklist.

Example:

```md
# Task: Add "Team" Page

## Summary

Generated `tmpl/web/ru/team.html` and localization skeletons.

## Observations

- Content overlaps with `about.html`.
- Consider merging some sections.

## Suggestions

- Use reusable includes for the team block.
```

---

## Execution and Handoff

Upon completing a task, the agent must:

* Write all file changes to the repository;
* Add inline comments where relevant;
* Create a final report in `agent/notes/YYYY/MM-DD-{task-name}.md`;
* Wait for Operator feedback or the next task.
