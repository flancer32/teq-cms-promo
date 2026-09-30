# Task: Define Features and Repository Examples Pages

## Summary

Recorded the operator's accepted structure: one descriptive features page and one examples page listing three real TeqCMS applications with live-site and application-repository links. Removed the obsolete `docs/site-structure.ru.md` document and its former landing/blog/hybrid example hierarchy.

Updated product content conventions, the canonical page catalogue, target navigation, page composition, and generation prompts. Kept current implemented routes separate from accepted additions. Actual page templates and navigation remain unchanged because this task refines the context structure.

## Application Sources

The operator identified the three live sites as TeqCMS users. GitHub repository metadata identifies their application sources:

- https://cms.teqfw.com/ — https://github.com/flancer32/teq-cms-promo
- https://wiredgeese.com/ — https://github.com/flancer32/site_wg
- https://teqfw.com/ — https://github.com/flancer32/site-teqfw

The live Wired Geese home page was accessible through the web tool; cms.teqfw.com and teqfw.com were not accessible through that tool. The TeqCMS usage assertion comes from the operator, not inferred from website markup. No external application source was changed.

## Validation

ADSM validation, SSR documentation validation, local links, local routing maps, and `git diff --check` in both repositories passed after correcting relative links in the new prompts. No test or typecheck script applies to these documentation changes. Translation execution was not triggered.

## Handoff

Features and examples are accepted requirements, with templates still to be implemented. Their navigation links should be enabled only with corresponding pages. No commits or pushes were performed.
