# Task: Check package skill links

## Summary

Inspected the installed `@flancer32` and `@teqfw` packages and verified that every skill under their `skills/` directories is already linked from `.agents/skills/`.

## Observations

- Seven packages provide one skill each: `teqfw-cms`, `teqfw-tmpl`, `teqfw-web`, `teqfw-cfg`, `teqfw-cli`, `teqfw-di`, and `teqfw-log`.
- All seven existing links resolve to the corresponding package skill directory, and each target contains `SKILL.md`.
- No new symlinks or changes to existing symlinks were needed.

## Suggestions

- Recheck the links after adding or updating TeqFW packages that may include new skills.
