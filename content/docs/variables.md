---
title: Variables
layout: docs
---

# Variables

|**Variable**|**Description**|
|:---------------:|:---------:|
|`site`|Sitewide information from your `site.config.js` file. Use this to call anything from your site config.|
|`page`|Page details in your front matter. Use this to call any variables in the front matter.|


## Calling the variables
To call the variables, you simply need to put the variable you want to call in a command.

### EJS
````ejs
<?= variable.value ?>
````

### Pug
````pug
tag= variable.value
````
or
````pug
#{variable.value}
````
