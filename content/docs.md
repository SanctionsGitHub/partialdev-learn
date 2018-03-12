---
title: Documentation
layout: docs
---

# Introduction

- [Installation](/docs/installation)
- [Pages](/docs/pages)

[![Build Status](https://img.shields.io/travis/luxaurajs/Luxaura.js/master.svg?style=flat-square)](https://travis-ci.org/luxaurajs/Luxaura.js) [![Releases](https://img.shields.io/github/release/luxaurajs/Luxaura.js/all.svg?style=flat-square)](https://github.com/luxaurajs/Luxaura.js/releases) ![devDependency Status](https://img.shields.io/david/dev/luxaurajs/Luxaura.js.svg?style=flat-square)

Luxaura.js is a simple static site generator.

## Features

HTML Pre-processors:
  - Pug
  - Markdown

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
