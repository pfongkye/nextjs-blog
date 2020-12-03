---
title: 'PRPL Pattern'
date: '2020-12-03'
---

# PRPL

The [PRPL](https://web.dev/apply-instant-loading-with-prpl/) pattern is a pattern used to improve web page loading, thus improving user experience. PRPL stands for:

 - **P**: push or preload
 - **R**: render initial route
 - **P**: pre-cache
 - **L**: lazy load

It is recommended to use Lighthouse to audit page and help identify problems. Lighthouse provides also some hints in fixing the problems.

## Preloading

Preloading assets using the `rel=preload` attribute on `link` tag.

## Render initial route

Inline CSS and critical JS only to have a fast first paint. Include only the assets that are present above the fold.
For better development maintenance, server side rendering could be used instead of inlining but be aware that it can cost you on Time To Interactive. Think about the different tradeoffs.

## Precache

Use service workers to cache assets so as to avoid too many requests to server when possible.

## Lazy loading

Lazy load images outside the viewport or below the fold using the lib `lazysizes` for example.