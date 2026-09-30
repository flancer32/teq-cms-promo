---
title: "Конфигурация приложения — TeqCMS"
description: "Конфигурация приложения: практическое руководство по исходникам Markdown, локализованному HTML и публикации на TeqCMS."
date: 2026-09-30
---

# Публикация включается явно

CLI-хост загружает конфигурацию один раз. TeqCMS отвечает за пространство `TEQ_CMS`; настройки языков и сервера принадлежат соответствующим пакетам.

## Настройки публикации

| Настройка | Назначение |
| --- | --- |
| `TEQ_CMS__BASE_URL` | Абсолютный публичный базовый URL без пути |
| `TEQ_CMS__PUBLICATION_FAMILIES` | JSON-список включённых префиксов и шаблонов представления |
| `TEQFW_TMPL__ALLOWED_LOCALES` | Поддерживаемые коды языков |
| `TEQFW_TMPL__DEFAULT_LOCALE` | Язык по умолчанию и второй вариант для нейтрального исходника |
| `TEQFW_TMPL__ENGINE` | Выбор шаблонизатора в стандартном хосте CMS |

Пример конфигурации приложения с семейством `docs`:

```dotenv
TEQ_CMS__BASE_URL=https://example.com
TEQ_CMS__PUBLICATION_FAMILIES=[{"prefix":"docs","presentation":"publication.html"}]
TEQFW_TMPL__ALLOWED_LOCALES=en,ru
TEQFW_TMPL__DEFAULT_LOCALE=en
TEQFW_TMPL__ENGINE=nunjucks
```

По умолчанию список семейств пуст. Префиксы не должны пересекаться или начинаться с кода поддерживаемой локали. Для локализованного HTML нужны исходники в `tmpl/web/{locale}/docs/` и шаблон приложения `publication.html`.

Скопируйте `.env.sample` в `.env` и задайте настройки в этом файле. `npm start` и `npm run generate` используют одну конфигурацию, загруженную CLI. Переменные окружения переопределяют совпадающие ключи dotenv.

## Необязательный входящий канал для агентов

`TEQ_CMS__AGENT_MESSAGE_ENABLED` включает закрытый файловый ящик; по умолчанию он выключен. Это не почтовый сервис. Владелец сайта сам организует чтение и ответы. Перед включением изучите [руководство движка](https://github.com/flancer32/teq-cms/blob/main/docs/publications.md).

[Поведение локалей](/ru/v2/docs/locales) и [поиск причины отсутствующей страницы](/ru/v2/docs/troubleshooting).
