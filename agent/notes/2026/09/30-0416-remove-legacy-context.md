# Task: Remove Legacy Context Branches

## Summary

Removed `ctx/product/`, including the project-local ADSM methodology description and empty product placeholders. Removed `ctx/site/` after relocating all four page generation prompts to `ctx/docs/code/browser/ssr/prompts/ru/v2/`. Compatibility stubs and the empty page-structure placeholder were removed.

Updated documentation, repository navigation, root instructions, metadata, the page-prompt template example, and the project-conventions skill to use canonical paths. Added local routing instructions and document metadata for relocated prompts.

## Authority and Preservation

The operator confirmed that cross-project ADSM methodology is maintained by the external skill. No local replacement methodology document was created. The public ADSM page prompt remains a site-content requirement. The accepted product identity and its Russian skin are unchanged in meaning. Existing Russian page prompts retain their language and content requirements during relocation.

Historical reports and the non-authoritative historical ADSM Package archive remain preserved; their references describe past work and are not active navigation. Existing changes from the preceding migration were retained. No site templates, configuration, runtime assets, translation metadata, commits, or pushes were changed.

## Validation

- ADSM validation: 0 errors, 0 warnings.
- SSR browser documentation validation: OK, no missing coverage or metadata.
- Supplementary local-link, document-metadata, exact sorted navigation-map, and legacy-directory-removal checks passed.
- Search of active documentation, root routing, project-conventions skill, and prompt template found no references to removed paths.
- `git diff --check` passed in both repositories.
- Documentation-only changes; no applicable test or typecheck scripts exist in the site manifest.

## Remaining Limitations

Previously documented gaps in runtime failure presentation and deployment topology remain unchanged. External author links were not revalidated. General ADSM guidance remains the external skill's responsibility.
