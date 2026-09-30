---
title: "Integration and package boundaries — TeqCMS"
description: "Practical guidance for integration and package boundaries: Markdown sources, localized HTML, and the TeqCMS publishing workflow."
date: 2026-09-30
---

# Keep content and runtime responsibilities clear

The website owns Markdown, shared presentation templates, and static assets. TeqCMS is a package integrated into a Node.js host; it supplies publication behavior rather than an application-specific editing layer.

## The standard host

The TeqFW CLI owns process startup, configuration loading, and lifecycle. The web package supplies `web:start` and the request pipeline. TeqCMS registers its handlers and supplies `cms:generate`. The template package supplies locale-aware template lookup and rendering contracts.

This site selects Nunjucks through host composition. Another host can choose a supported engine implementation, such as Mustache, and provide compatible presentation templates.

## Content changes usually need no plugin

Adding a page or language variant means adding a Markdown source under an enabled family. A presentation change belongs in shared templates. A new runtime integration is a separate engineering task.

Do not assume a marketplace of ready-made integrations. Inspect the [engine source and package skill](https://github.com/flancer32/teq-cms/tree/main/skills/teqfw-cms) before planning an extension.

[Discuss a host integration with me](/en/v2/contacts).
