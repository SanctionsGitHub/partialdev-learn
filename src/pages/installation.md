---
title: Installation
layout: doc
---

# Installation

## Quick Start
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TristianK3604/vanillify)

This will automatically clone the repository to your GitHub account, run the build commands, and serve your site.

## Advanced Installation

Clone this repository locally

````shell
$ cd path/to/repository
````
Change to the path that Vanillify is installed in.
````shell
$ npm install
````
Install all dependencies required to install Vanillify.
````shell
$ npm run build
````
Generate your Vanillify website.

If your computer (or whatever you used to build Vanillify) is setup to serve pages, just upload the build to your public folder and you're done!

**If not:**

````shell
$ npm run serve
````
Your Vanillify site is available at http://localhost:5000.
