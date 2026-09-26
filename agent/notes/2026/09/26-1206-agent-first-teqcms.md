# Task: Agent-first TeqCMS

## Summary

Updated the TeqCMS package and this promo site for agent-authored multilingual Markdown. The CMS no longer includes its LLM API translation command or translation state services. It now provides a finite discovery-file generator and an optional GET agent-message handler with a private file inbox. The promo manifest keeps published CMS and template packages for production while tracking both GitHub main branches under separate development install names. Updated the project skill link for `@teqfw/web` and revised English and Russian site documentation.

## Observations

- Markdown publication and machine-readable source access remain explicit host configuration. The agent-message route is disabled until enabled by the host.
- The published production CMS version still exposes the legacy translation command. The new generator and message handler are in the local TeqCMS changes and require a future package release before this promo site can use them as runtime features.
- npm resolves two packages declared under identical dependency names as development-only. Separate `teq-cms-main` and `teq-tmpl-main` names preserve the stable runtime packages with `npm ci --omit=dev`. `npm run dev:main` temporarily links the main packages to their runtime names; `npm ci` restores the stable installation.
- Automatic approval review rejected publishing Markdown from all locales by default because that could expose source content. The implementation keeps source exposure opt-in. It also rejected deleting the package type entry; the type map was updated in place.

## Verification

- TeqCMS: unit and acceptance tests, typecheck, `teqfw-platform .`, `adsm-ctx validate .`, `teqfw-esm-validator src --profile base`, CLI help, package dry run, and `git diff --check` passed.
- Promo site: `npm ci`, dependency resolution, dev-main linking and restoration, TeqFW CLI help, Nunjucks parsing of documentation and feature pages, and `git diff --check` passed. A clean temporary production install confirmed published CMS and template packages remain available.
- A packed copy of the changed TeqCMS package was installed in a temporary host. Its real `teq cms:generate` command wrote all three files; `llms.txt` contained the configured Markdown URL.
- With the standard CMS DI configurator in that host, live loopback HTTP requests returned HTML and Markdown (200), served all three generated discovery files (200), and accepted `GET /agent/message` (202). The private inbox contained the accepted record. The temporary server was stopped afterward.
- `teqfw-esm-validator . --profile base` reports 67 `jsdoc-contracts` findings concerning external or composite JSDoc types. Source-only validation and TypeScript checking pass; the whole-root finding remains a validator limitation to resolve separately.

## Suggestions

- Release the updated TeqCMS package, then select that stable version for the promo runtime and regenerate the site's discovery files when publication families are configured.
- Decide whether broader default Markdown publication is authorized; current configuration avoids accidental public source exposure.
