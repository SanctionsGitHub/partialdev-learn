# Front Matter

YAML Front Matter is included with Vanillify, which you can use for many things. One of the main reasons that we included front matter in Vanillify is so you can have multiple layouts, and specify which one you want to use.

## Specifying layouts

If a layout is not specified, it uses the layout in `default.ejs`. To specify a layout, you must put the following in your page's front matter:
````yaml
layout: mylayout
````
Replace `mylayout` with the file name of your layout (not including the `.ejs`).

## Variables

Common variables used in front matter are `title` and `description`. Of course, these are supported by Vanillify, and so are any custom variables you'd like to use!

## Calling the variables

See [Variables](Variables) for more information.
