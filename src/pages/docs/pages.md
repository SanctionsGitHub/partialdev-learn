---
title: Pages
layout: docs
---

# Pages
Luxaura.js supports 2 HTML pre-processors, Markdown and Pug. Of course, it also supports plain HTML!

## Pug Pages
EJS is supported in Pug pages. To use Pug, simply use the file extension `.pug` in your pages. Example:
````pug
//- my-page.pug
h1 Hello, world!
p.
  This is a paragraph!
if page.title
  h4= page.title
else
  h4= site.title
````
This will render your page using Pug and EJS, and output into `my-page.html`.

## Markdown Pages
Sadly, EJS is not supported in Markdown pages. To use Markdown, use either file extension `.md` or `.markdown`. Example:
````markdown
<!-- md-page.md -->
# Hello, world!

This is a paragraph
````markdown
# this is a markdown code block
````
````
Syntax Highlighting is supported in Markdown, using Highlight.js. This will render your page using Markdown, and output into `md-page.html`.

## HTML Pages
EJS is supported in HTML pages. Example:
````html
<!-- html-page.html -->
<h1>Hello, world!</h1>
<? if page.title { ?>
<?= page.title ?>
<? } else { ?>
<?= site.title ?>
<? } ?>
````
