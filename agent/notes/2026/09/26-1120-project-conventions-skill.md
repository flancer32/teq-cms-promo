# Task: Create the project conventions skill

## Summary

Created `.agents/skills/project-conventions/SKILL.md` from the `ai-memo` template for this repository and its separate `ctx` repository.

## Observations

- Both repositories use `main` and have separate `origin` remotes.
- Existing project-local TeqFW skills are symlinks into `node_modules`.
- The root package has no test or typecheck script; translation is an operator-run command.

## Suggestions

- Revisit the shared-memory section if the team's `ai-memo` issue and note conventions change.
