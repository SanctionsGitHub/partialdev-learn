---
title: Theming
layout: docs
---

# Theming
Before you start theming, you'll need to [fork the repository](https://github.com/TristianK3604/Luxaura.js/fork). This makes it easier to upgrade Luxaura.js, since all you'll need to do is compare the forks.

## Syntax Highlighting
For Markdown files, if the type of language is specified in a code block, it will highlight it. Of course, this won't matter without the CSS to style the highlighting! The following is the default theme's syntax highlighting CSS, and you can take it and change it according to your needs:

````css
.hljs-name {
    color:#01a3a3;
}

.hljs-tag,.hljs-meta {
    color:#778899;
}

.hljs,
.hljs-subst {
    color: #444
}

.hljs-comment {
    color: #888888
}

.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
    font-weight: bold
}

.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
    color: #880000
}

.hljs-title,
.hljs-section {
    color: #880000;
    font-weight: bold
}

.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
    color: #BC6060
}

.hljs-literal {
    color: #62bcbc
}

.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
    color: #25c6c6
}

.hljs-meta-string {
    color: #4d99bf
}

.hljs-emphasis {
    font-style: italic
}

.hljs-strong {
    font-weight: bold
}
````

## Showing others your theme

Once you have finished your theme, you may want to show it off to others, and you can! In the Luxaura.js community, there is a sub-tag called "Themes" under "Extend". Use that tag, and show off your theme! Here are some suggestions for your post:

- Include a screenshot
- Include a demo
- Include a link to documentation (if any)

And don't forget the download link!


