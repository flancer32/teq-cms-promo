# Task: Upgrade Cognitive Context to ADSM

## Summary

Aligned context navigation with the current `adsm-ctx` skill: context-side `AGENTS.md` files now declare Purpose, Level Map, and Level Boundary with actual, sorted entries. Added agent orientation, content verification guidance, and an SSR browser documentation branch using `adsm-doc-web-browser`.

Moved shared writing, author, layout, route, and localization knowledge into the four-level documentation corpus. Former shared-rule paths remain compatibility entry points. Updated site-root routing and corrected the missing ADSM concept reference in its generation prompt.

## Preserved Meaning and Materials

TeqCMS remains the primary product; ADSM remains a related approach, the agent remains external, and support remains optional. The Russian product skin is unchanged and its paired document preserves its meaning. Page-specific prompts, legacy approach description, empty product and agent-policy placeholders, generation templates, historical reports, and assets are preserved. Schema version remains 0.1.0, matching the installed baseline.

Both Git repositories were clean on main and synchronized with their fetched upstream branches before edits. No commits or pushes were performed.

## Validation

- `adsm-ctx adsm-ctx:validate .`: 0 errors, 0 warnings.
- `adsm-doc-web-browser validate ctx/docs/code/browser/ssr`: OK; no missing shared or SSR coverage, and no missing required metadata.
- Supplementary checks: local documentation links, Path and Changed metadata, context-side control headings, exact sorted Level Maps, level capacity, and skin pairing passed.
- `git diff --check` passed in both repositories.
- No test or typecheck script exists in the site manifest; changes are documentation-only. Translation execution was not triggered.

## Observations and Remaining Decisions

The installed ADSM validator accepts the former minimal baseline, so supplementary checks cover current skill requirements. Browser validation must target the SSR document root explicitly.

The existing context does not specify missing-route, unavailable-locale, empty-content, or rendering-failure presentation. These are documented as unknown runtime contracts. Defining or promising them requires engine-contract evidence or an operator product decision. Deployment topology also remains unspecified. No backend or deployment specialization was applied because this task does not design those areas.

Detailed legacy page prompts and the historical ADSM approach description remain outside the canonical documentation corpus. Read them within the canonical product and authority boundaries; historical publication or automation wording does not grant execution permission. Existing external author links were preserved without availability checks.

## Handoff

Review site-root routing and its task report separately from the context repository changes. Context work also has a report under its existing project-local `agent/report/` convention.
