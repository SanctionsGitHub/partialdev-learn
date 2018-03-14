---
title: Layouts
layout: docs
---

# Layouts

You can have multiple layouts in your Luxaura.js site. The default layout included with Luxaura.js is below:
````html
<!DOCTYPE html>
<html>
<head>
<?- include('../partials/head.html') ?>
</head>
<body>
<?- include('../partials/header.html') ?>
<?- content ?>
<?- include ../partials/foot.html ?>
</body>
</html>
````
The default layout includes the head partial, and the body of your documents. You can create custom layouts (and even have multiple!) by putting it in the `views` folder. The least recommended for your layout is the same as what is in the default layout (unless you want to create a 'none' layout, which you would just put `<?- content ?>` in the file.).

[[toc]]
