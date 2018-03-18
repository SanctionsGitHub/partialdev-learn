---
title: EJS
layout: docs
---

# EJS

Luxaura.js uses EJS as its templating engine (like Jekyll uses Liquid).

## Using EJS

### Calling site/page variables
See [Variables](/docs/variables) for information on this.

### Tags
- `<?` Scriptlet tag, no output
- `<?=` HTML Escaped output
- `<?-` HTML Unescaped output
- `<?#` Comment tag, no output

### Including partials
If you'd like to include a partial, simply use the following script:
````
<?- include('../partials/mydocument.html') ?>
````