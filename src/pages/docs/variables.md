---
title: Variables
layout: docs
---

# Variables

|**Variable**|**Description**|
|:---------------:|:---------:|
|`site`|Sitewide information from your `site.config.js` file. Use this to call anything from your site config.|
|`page`|Page details in your front matter. Use this to call any variables in the front matter (including custom variables).|

## Calling the variables

To call the variables, you simply need to put the variable you want to call in an EJS command.<br />
If you want to get the site title, you would use the EJS command `<%= site.title %>`. Getting the page title would be `<%= page.title %>`, and anything else in the front matter would be `<%= page.myvariable %>`.

Just replace `myvariable` with your variable whether it is in your site config file or your page's front matter and replace `page` with `site` to get it out of the site config rather than the page front matter.
