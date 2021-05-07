---
title: 'Deal with render blocking resources'
date: '2021-05-07'
---

# Render blocking resources

## JavaScript

Scripts can block rendering. To remediate this issue:
- inline critical JS resources in `<script>` tag
- defer non critical resources with `async` or `defer` attributes (see [adding interactivity with JS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript))
- [remove unused code](https://web.dev/remove-unused-code)

## CSS
CSS can also be blocking. To mitigate this:
- split CSS using [critical tool](https://github.com/addyosmani/critical/blob/master/README.md)
- inline critical (above the fold) CSS in `<style>` tag
- use `media` attribute to load only on targeted devices (see [render blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css))
- use `preload` to load non critical CSS asynchronously 
- [minify CSS](https://web.dev/minify-css)

## Resources

More information can be found reading this [article](https://web.dev/render-blocking-resources/).