---
title: Documentation
layout: docs
---

# Introduction

- [Installation](/docs/installation)
- [Pages](/docs/pages)

![CLI Version](https://img.shields.io/npm/v/@luxaurajs/cli.svg?label=cli&style=flat-square) ![Dependency Status](https://img.shields.io/david/luxaurajs/cli.svg?style=flat-square)

Luxaura.js is a simple static site generator.

## Features

HTML Pre-processors:
  - Pug
  - Markdown
  
CSS Pre-processors:
  - LESS
  - Stylus
  - Sass
    
JavaScript Pre-processors:
  - TypeScript
  - LiveScript
  - CoffeeScript

Styling:
  - Syntax Highlighting (only in Markdown files)

Templating:
  - EJS

## Folder structure

````
site/
static/
content/
partials/
views/
site.config.js
````

- `site/`: The folder the generated files go in.
- `static/`: Where non-processed files go.
- `content/`: Where your site pages go.
- `partials/`: Where things like your document head, navigation bar, etc. go.
- `views/`: Where your site layouts go.
- `site.config.js`: Your site configuration file.

