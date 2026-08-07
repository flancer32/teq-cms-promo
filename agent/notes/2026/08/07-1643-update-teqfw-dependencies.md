# Task: Update TeqCMS Promo Dependencies

## Summary

- Updated `@flancer32/teq-cms` from `^0.5.2` to `^0.6.0` and regenerated `package-lock.json`.
- Migrated the npm scripts to the TeqFW CLI commands `fl32:web:start` and `cms:translate`.
- Migrated `.env.example` to the current `TEQ_CMS__*`, `TEQFW_TMPL__*`, and `TEQFW_WEB__*` configuration namespaces.
- Added local `.agents/skills/` symlinks for all installed TeqFW dependency skills.
- Declared the TeqCMS pre-DI configurator in the host package metadata at `./node_modules/@flancer32/teq-cms/bootstrap/di-config.mjs`.

## Observations

- The current dependency graph resolves `@flancer32/teq-tmpl` 0.5.0, `@flancer32/teq-web` 0.16.0, `@teqfw/cfg` 2.0.0, `@teqfw/cli` 2.1.0, `@teqfw/di` 2.9.0, and `@teqfw/log` 2.0.0.
- The existing `.env` was intentionally left unchanged. It still contains the legacy single-underscore variables and must be migrated separately before using it with the new runtime.
- The configurator is host-only metadata; declaring the dependency's relative `./bootstrap/di-config.mjs` path would be incorrect for this application.
- TLS settings are not represented in `.env.example` because the current web configuration expects TLS as an object, while the dotenv source supports flat values only.

## Verification

- `npm install` completed with no reported vulnerabilities.
- `node_modules/.bin/teq help` listed both current commands.
- Running `node_modules/.bin/teq` without an explicit command selected `fl32:web:start` and reached the HTTP server startup path.
- `npm start` reached the web server startup path successfully with current-format environment variables.
- All seven skill symlinks resolve to an installed `SKILL.md`.
- The pre-existing `package-lock.json` root-name change was preserved.
