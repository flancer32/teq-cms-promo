---
title: "Установка — Документация v2"
description: "TeqCMS подключается как зависимость npm. Агент поддерживает локализованные Markdown-файлы и шаблоны представления в Git."
date: 2026-09-30
---

# Установка и запуск TeqCMS

TeqCMS подключается как зависимость npm. Агент поддерживает локализованные Markdown-файлы и шаблоны представления в Git.

    mkdir my-site
    cd my-site
    npm init -y
    npm install @flancer32/teq-cms

Размещайте публикации в `tmpl/web/{locale}/`, а статические файлы — в `web/`.

    TEQFW_WEB__TYPE=http
    TEQFW_WEB__PORT=3000
    TEQFW_TMPL__ALLOWED_LOCALES=en,ru
    TEQFW_TMPL__DEFAULT_LOCALE=en
    TEQFW_TMPL__ENGINE=nunjucks
    TEQ_CMS__BASE_URL=https://example.com

Запуск сервера: `npx teq web:start`. После изменения публикаций обновите файлы обнаружения: `npx teq cms:generate`.
