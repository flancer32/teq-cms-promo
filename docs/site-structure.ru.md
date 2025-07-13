# Структура сайта TeqCMS (Russian)

Этот документ фиксирует текущую структуру демо-сайта и планируемую структуру второй версии (`./v2`).

## Текущая структура шаблонов (tmpl/web/ru)

```
tmpl/web/ru/
├── index.html
├── contact.html
├── faq.html
├── docs/
│   ├── about.html
│   ├── install.html
│   ├── config.html
│   ├── locales.html
│   └── translate.html
├── features/
│   ├── content-as-code.html
│   ├── ai-localization.html
│   ├── file-based.html
│   └── ssr.html
└── inc/
    ├── layout.html
    └── nav.html
```

## Целевая структура v2 (./v2)

```
v2/
├── index.html
├── about.html
├── features.html
├── docs/
│   ├── overview.html
│   ├── install.html
│   ├── config.html
│   ├── locales.html
│   ├── translate.html
│   ├── dev-llm.html
│   ├── plugins.html
│   ├── cli.html
│   ├── faq.html
│   └── troubleshooting.html
├── examples/
│   ├── landing.html
│   ├── blog.html
│   └── hybrid.html
└── roadmap.html
```

Файлы в каталоге `v2` пока содержат минимальные заглушки и будут наполняться контентом по мере развития демо-проекта.
