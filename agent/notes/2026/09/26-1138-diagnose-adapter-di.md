# Task: Diagnose TeqCMS Adapter Resolution Error

## Summary

The error is caused by the CMS adapter contract resolving to its abstract base class. `getRenderData()` on that class intentionally throws `Method not implemented`.

## Findings

- The host manifest points to `@flancer32/teq-cms/bootstrap/di-config.mjs`.
- Installed stable TeqCMS is version `0.6.1`. Its configurator returns a top-level `preprocessors` array containing a callback.
- Installed `@teqfw/cli` is version `2.5.0`. It only reads preprocessor declarations from `extensions.container.preprocessors`; therefore it ignores the stable CMS configurator's result, and no adapter substitution is applied.
- Installed development TeqCMS `0.7.0` has the compatible format: `container.preprocessors: ['Fl32_Cms_Back_Di_Preprocessor$']`.
- The template and request routing are already reaching the template handler. The failure occurs when its declared `Fl32_Cms_Back_Api_Adapter$` dependency resolves to the unimplemented contract.

## Recommendation

Use the development CMS package with its matching configurator for local work (`npm run dev:main`, then `npm run start:main`). For production, publish/select a TeqCMS release whose bootstrap matches the current CLI configurator contract. No content-layer or template change addresses this error.

## Release Readiness Follow-up

- The installed CLI changelog says version `2.4.0` replaced callback-based host Container extensions with declarative policy producer identifiers under `container`. CMS `0.7.0` uses that new contract, but its manifest still permits `@teqfw/cli >=2.1.0`; raise the minimum to `>=2.4.0` before publishing this CMS release.
- This site currently declares `@flancer32/teq-cms: ^0.6.0`. That range will not resolve CMS `0.7.0`; after publication, update the site's dependency range and lockfile to `^0.7.0` to consume it.
- The prior TeqCMS validation is recorded in `agent/notes/2026/09/26-1206-agent-first-teqcms.md`; this follow-up did not repeat those checks.

## Verification

Inspected the host manifest, installed package versions, both CMS configurators, the CLI's configurator loading code, and the template handler dependency declaration.

## Local Homepage Reproduction

- This promo checkout still declares TeqCMS `^0.6.0`, and its lockfile/node_modules resolve CMS `0.6.1`, tmpl `0.5.0`, and CLI `2.5.0`.
- With the stable tmpl package, startup without `TEQFW_TMPL__DEFAULT_LOCALE` fails validation. With `ru` supplied and the server bound to loopback, `/` returns the static fallback page, while `/ru/` returns 404 and logs the same `Fl32_Cms_Back_Api_Adapter.getRenderData` exception.
- The installed dev tmpl `0.6.0` accepts an unset default locale; stable `0.5.0` still throws when it is missing. This smoke test exercised the old stable packages, not the updated dev package pair or the other server.
- The temporary local server was stopped. No runtime code or configuration was changed. The smoke test passed far enough to reproduce the adapter error; the homepage template route itself failed as described.
