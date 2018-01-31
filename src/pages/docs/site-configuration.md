---
title: Site Configuration
layout: docs
---

# Site Configuration

All site configuration goes in your `site.config.js` file. You can use any variable you like. **Put all configuration inside the following, otherwise your Vanillify installation might fail or variables will not be called!**

````javascript
module.exports = {
  site: {
    // site configuration goes here
  }
}
````
You'll need to separate each config variable with a comma.

## Configuring your site

Vanillify by default will include your page title and site title in `<title></title>` in your page heads. Without a site title, you wouldn't have anything to put in your head!
````yaml
title: 'Vanillify'
````
If your page has a description, this is included in a meta tag. If not, then your site description will go in that meta tag.
````yaml
description: 'A vanilla static site generator'
````
You can use whatever variables you would like to.

## Accessing variables

See [Variables](/docs/variables) for more information on this.
