# Task: Review Project Against Three Skills

## Summary

- Added an ADSM structural baseline in the separate `ctx/` repository and preserved its existing product and site guidance.
- Corrected the site README's startup command and Node.js requirement to match the current package metadata.
- Removed the package's `main` pointer to a nonexistent `index.js`.

## Checks

- `adsm-ctx validate .`: passed with 0 errors and 0 warnings.
- `npm ls --depth=0`: passed. The installed CMS and TeqFW host declare Node.js `>=20`; `teq help` lists the configured `fl32:web:start` command.
- `git diff --check` in both repositories: passed.
- No root test or typecheck script exists; no translation command was run.

## Validator Scope

- `teqfw-platform .`: exit 1, `valid: false`, one `unit-test.source-root` violation for missing `src/`.
- `teqfw-esm-validator .`: exit 1, `valid: false`, two `type-map` violations for missing `types` metadata and `types.d.ts`.
- These checks assume a package that publishes TeqFW source modules. This repository publishes site templates and has no local `.js` or `.mjs` modules. Creating an empty `src/`, unit-test tree, or type map would not verify its content or runtime. The executable checks therefore remain inapplicable at this repository root.

## Remaining Decision

The context describes both a TeqCMS promotional site and a paid ADSM Package as its product. The operator must identify the authoritative product meaning before legacy documents can be migrated into `ctx/docs/product/`. See the separate context task report for evidence and preserved scope.
