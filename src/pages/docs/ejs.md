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
If you want to include your document head or navigation bar, simply use the following script:
````
<?- include('../partials/mydocument') ?>
````
