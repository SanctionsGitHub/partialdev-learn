---
title: Documentation
layout: docs
---

# Introduction

- [Installation](/docs/installation)
- [Pages](/docs/pages)

Luxaura.js is a simple static site generator.

[![Build Status](https://travis-ci.org/TristianK3604/Luxaura.js.svg?branch=master)](https://travis-ci.org/TristianK3604/Luxaura.js) [![Releases](https://img.shields.io/github/release/TristianK3604/Luxaura.js/all.svg)](https://github.com/TristianK3604/Luxaura.js/releases) ![devDependency Status](https://img.shields.io/david/dev/TristianK3604/Luxaura.js.svg)

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
