---
title: 'Image on the web'
date: '2020-12-28'
---

# Responsive Images

When displaying an image on a web page, there are some factors to take into account. For example:
- The size of the device on which the image will be displayed
- The connectivity available
- The [density](https://www.danrodney.com/blog/retina-web-graphics-explained-1x-versus-2x-low-res-versus-hi-res/) of the device

There are some [techniques](https://jakearchibald.com/2015/anatomy-of-responsive-images/) that are used to deliver the best experience to the users:
- The use of `srcset` attribute of `<img>` which provide a list of images, with `src` used as a fallback
- The use of `sizes` attribute of `<img>` which is used to select and give the appropriate width to the image depending on the size of the viewport
- The use of `<picture>` element


