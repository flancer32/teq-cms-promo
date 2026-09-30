---
title: "TeqCMS — Markdown for agents. Websites for people."
description: "A file-based CMS for multilingual websites. Keep Markdown and translations in Git, render HTML on the server, and get implementation help from its author."
date: 2026-09-30
---

<div class="hero">
<div>
<h1><span class="hero-product">TeqCMS / A multilingual CMS built around Markdown</span>Your content.<br>Your Git.<br><span>Your website.</span></h1>
<p class="lead">I built TeqCMS for multilingual websites that people and agents can read. Author in Markdown, keep every language in Git, and deliver finished HTML from the server.</p>
<div class="actions"><a class="btn" href="/en/docs/install">Build with TeqCMS</a><a class="btn btn-secondary" href="/en/examples">See real sites →</a></div>
<p class="small-note">Open source · No content database · No admin panel</p>
</div>
<div class="source-window">
<div class="window-label"><span>ONE PUBLICATION / TWO REPRESENTATIONS</span><span aria-hidden="true">.md →</span></div>
<pre><code>tmpl/web/
├── en/features.md
├── ru/features.md
└── en/publication.html
# Content stays in your repository.
# The template shapes the page.</code></pre>
<div class="output-list">
<a class="output-link" href="/en/features.md"><span>/en/features.md</span><strong>Markdown ↗</strong></a>
<a class="output-link" href="/en/features.html"><span>/en/features.html</span><strong>English HTML ↗</strong></a>
<a class="output-link" href="/ru/features.html"><span>/ru/features.html</span><strong>Russian HTML ↗</strong></a>
</div>
<p class="small-note">These examples pin the language and format: .md opens the source; .html opens the rendered page. A URL without an extension, such as /about, selects its format from the client’s HTTP request: HTML for a browser, Markdown for a client that supports it. Without a locale prefix, HTML uses the first supported language matching Accept-Language, then the default language. <a href="/en/docs/locales">How format and language are selected</a>.</p>
</div>
</div>

<div class="benefit-strip">
<div><strong>Readable sources</strong><span>Markdown for agents and editors.</span></div>
<div><strong>Reviewable changes</strong><span>Content and locale files in Git.</span></div>
<div><strong>Ready to read</strong><span>Localized HTML rendered on the server.</span></div>
</div>

<section class="content-section">
<p class="eyebrow">A small, inspectable publishing model</p>
<h2>Work with the tools you already use.</h2>
<div class="card-grid">
<div class="card"><span class="card-tag">FILES + GIT</span><h3>Keep control of your content</h3><p>Pages are ordinary files. Review a diff, restore an earlier version, or move your Markdown to another project.</p></div>
<div class="card"><span class="card-tag">EN / RU / …</span><h3>Give each language its own voice</h3><p>Each locale has an explicit source. Adapt the message to its audience and review the wording before publishing.</p></div>
<div class="card"><span class="card-tag">SERVER-RENDERED HTML</span><h3>Deliver the page, already built</h3><p>Shared templates turn Markdown into HTML on the server. Readers can access the content without a client-side application.</p></div>
</div>
<a href="/en/features.html">Explore the capabilities →</a>
</section>

<section class="content-section workflow">
<p class="eyebrow">From an edit to a page</p>
<h2>A workflow you can inspect.</h2>
<ol>
<li><strong>Write or ask an agent.</strong> Edit a Markdown file in your editor, or give an external agent a task.</li>
<li><strong>Review in Git.</strong> Check the content, locale variants, and template changes before publishing.</li>
<li><strong>Serve with TeqCMS.</strong> The CMS reads the prepared files and renders the requested language through the site's templates.</li>
</ol>
<p>I use ADSM — Agent Driven Site Management — to keep project instructions alongside this workflow. <a href="/en/docs/adsm">See how the approach works</a>.</p>
</section>

<section class="proof-block">
<p class="eyebrow">You're looking at a working example</p>
<h2>This site is the demonstration.</h2>
<p>I publish this website with TeqCMS: Markdown sources, English and Russian pages, shared templates, and an external agent working on files. You can inspect the implementation rather than take the product claims on trust.</p>
<div class="actions"><a class="btn btn-secondary" href="https://github.com/flancer32/teq-cms-promo">Inspect this site's repository</a><a class="btn btn-secondary" href="/en/index.md">Read this page as Markdown</a></div>
</section>

<section class="support-panel">
<p class="eyebrow">Work directly with the author</p>
<h2>Want help getting your site live?</h2>
<p>I'm Alex Gusev. I can help you assess the fit, set up TeqCMS, migrate content, or design a multilingual publishing workflow. Bring your project and its constraints; I'll help you define a practical scope.</p>
<div class="actions"><a class="btn" href="/en/contacts">Discuss your project →</a><a href="/en/subscription">Explore ongoing support</a></div>
<p class="small-note">Prefer to build it yourself? <a href="/en/docs/install">Start with the installation guide</a> or <a href="https://github.com/flancer32/teq-cms">read the engine source</a>.</p>
</section>
