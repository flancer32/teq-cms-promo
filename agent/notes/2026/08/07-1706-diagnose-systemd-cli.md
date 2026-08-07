# Task: Diagnose systemd TeqCMS Startup

## Finding

The service unit invokes the obsolete command `npx teq-cms web`. The installed `@flancer32/teq-cms@0.6.0` no longer publishes a `bin` executable or the old `web` command. The current process host is `@teqfw/cli`, exposed as `teq`, with the web command `fl32:web:start`.

`npm start` works because npm adds `node_modules/.bin` to `PATH` and runs the host script `teq fl32:web:start`. The TeqCMS lifecycle plugin is loaded only through that TeqFW CLI host, package metadata, and the host DI configurator; the obsolete `npx` invocation does not establish this composition path.

## Recommended Service Command

Use the project script from the existing working directory:

```ini
ExecStart=/bin/bash -c 'source $NVM_DIR/nvm.sh && npm start'
```

The existing `.env` must also contain the current `TEQ_CMS__*`, `TEQFW_TMPL__*`, and `TEQFW_WEB__*` variables; the service inherits the same configuration requirements as `npm start`.
