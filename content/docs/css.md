---
title: CSS
layout: docs
---

# CSS

Luxaura.js has three built-in CSS pre-processors (use in `content` folder).

## Sass

- **File Extension:** `.scss`
- **Example:**
```scss
// my-css.scss
$font-family: Tahoma, Verdana, sans-serif;

body {
    font-family: $font-family;
}

a {
    text-decoration: none;
    &:hover {
        color: #000;
    }
}
```
- **Outputs into** `my-css.css`

## LESS

- **File Extension:** `.less`
- **Example:**
```less
// less-css.less
@font-family: Tahoma, Verdana, sans-serif;

body {
    font-family: @font-family;
}

a {
    text-decoration: none;
    &:hover {
        color: #000;
    }
}
```
- **Outputs into** `less-css.css`

## Stylus

- **File Extension:** `.styl`
- **Example:**
```stylus
// stylus-css.styl
font-family = Tahoma, Verdana, sans-serif

body
    font-family font-family

a
    text-decoration none
    &:hover
        color #000
```
- **Outputs into** `stylus-css.css`