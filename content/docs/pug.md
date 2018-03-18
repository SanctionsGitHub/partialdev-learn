---
title: Pug
layout: docs
---

# Pug

Pug can also be used to access variables (but it can only be used in `.pug` files).

## Using Pug

### Calling site/page variables
See [Variables](/docs/variables) for more information on this.

### Tags
- `-` Scriptlet tag, no output
- `tag=` HTML Escaped output
- `tag!=` HTML Unescaped output
- `//-` Comment tag, no output

### Including partials
If you'd like to include a partial, simply use the following script:
````pug
include ../partials/mypage.html
````


