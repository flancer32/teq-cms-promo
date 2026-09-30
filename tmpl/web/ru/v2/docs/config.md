---
title: "Конфигурация — Документация v2"
description: "CLI-хост загружает настройки из окружения. TeqCMS использует пространство TEQCMS."
date: 2026-09-30
---

# Конфигурация CMS

CLI-хост загружает настройки из окружения. TeqCMS использует пространство `TEQ_CMS__*`.

    TEQFW_WEB__TYPE=http
    TEQFW_WEB__PORT=3000
    TEQFW_TMPL__ENGINE=nunjucks
    TEQFW_TMPL__ALLOWED_LOCALES=en,ru
    TEQFW_TMPL__DEFAULT_LOCALE=en
    TEQ_CMS__BASE_URL=https://example.com
    TEQ_CMS__PUBLICATION_FAMILIES=[{"prefix":"journal","presentation":"publication.html"}]

Markdown-публикации выключены до настройки семейства. Исходный Markdown доступен по URL без локали: выбирается английский источник, затем источник локали по умолчанию. HTML доступен по URL с локалью и требует соответствующего источника.

Для приёма сообщений от агентов включите `TEQ_CMS__AGENT_MESSAGE_ENABLED=true`. Сообщения сохраняются в закрытом каталоге `var/teq-cms/agent-messages/`.
