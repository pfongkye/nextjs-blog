---
title: 'Scaling CSS'
date: '2021-01-29'
---

# Scaling CSS

CSS can be difficult to scale as an application grows, if there is no clearly defined strategy in how to modularize the CSS.

There are different techniques that can be used to help in scaling CSS (one is [BEM](https://en.bem.info/methodology/) which stands for Block, Element and Modifier).

BEM is a component-based approach to web development and helps in code reuse. It uses modifiers that help giving purpose to a message for example.

```html
<style>
.message {
    background-color: grey;
}
.message--error {
    background-color:red;
}
</style>
<div class="message message--error">There's something wrong.</div>
```

Other approaches also exist:
- [Object Oriented CSS](https://github.com/stubbornella/oocss/wiki)
- [SMACSS](http://smacss.com/)
- [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
- [CSS in JS](https://en.wikipedia.org/wiki/CSS-in-JS)

