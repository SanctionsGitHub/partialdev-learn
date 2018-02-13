---
title: Pages
layout: docs
---

# Pages
Luxaura.js supports 2 HTML pre-processors, Markdown and Pug. Of course, it also supports plain HTML!

## Pug Pages
- **EJS Support:** <i class="fa fa-check"></i>
- **Variable Access:** <i class="fa fa-check"></i>
- **Syntax Highlighting:** <i class="fa fa-times"></i>
- **File Extension:** `.pug`
- **Example:**
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
- **Outputs into** `my-page.html`

## Markdown Pages
- **EJS Support:** <i class="fa fa-times"></i>
- **Variable Access:** <i class="fa fa-times"></i>
- **Syntax Highlighting:** <i class="fa fa-check"></i>
- **File Extension:** `.md` or `.markdown`
- **Example:**

````markdown
<!-- md-page.md -->
# Hello, world!

This is a paragraph
```markdown
# this is a markdown code block
```
````
- **Outputs into** `md-page.html`

## HTML Pages
- **EJS Support:** <i class="fa fa-check"></i>
- **Variable Access:** <i class="fa fa-check"></i>
- **Syntax Highlighting:** <i class="fa fa-times"></i>
- **File Extension:** `.html`
- **Example:**
````html
<!-- html-page.html -->
<h1>Hello, world!</h1>
<? if (page.title) { ?>
<?= page.title ?>
<? } else { ?>
<?= site.title ?>
<? } ?>
````
- **Outputs into** `html-page.html`
