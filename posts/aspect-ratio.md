---
title: 'Image Aspect ratio'
date: '2021-05-14'
---

# Dealing with image aspect ratio

There are some methods that can be used to give an aspect ratio to an image element for better web responsiveness.

## Padding-Top Hack

Before the availability of the CSS property `aspect-ratio`, a common method to manage aspect ratio of images (in a carousel for example) is to use
the *Padding-Top Hack*.

```html
<div class="container"><img alt="..." src="..."><img alt="..." src="..."></div>
```

```css
.container {
    width: 100%;
    position: relative;
    padding-top: 100%; /* simulates an aspect-ratio of 1:1. For 4:3, use 75%, etc. */
}

.container > img {
    position: absolute;
    top: 0;
}
```

## aspect-ratio property

It's simpler to use the aspect-ratio and thus does not overhaul the use of `padding-top`.

```css
.container {
    width: 100%;
}
.container > img {
    aspect-ratio: 16 / 9; /* equivalent to padding-top: 56.25%; where (9/16 * 100 = 56.25) */ 
}
```

## image attributes

Another technique that can be used, if we know the size of the image in advance (for example `800px * 600px`), is by setting the `width` and `height` attributes of the image, and by setting the CSS property `width` to 100%.

```html
<img alt="..." src="..." width="8" height="6">
```

```css
img {
    width: 100%;
}
```

## Resources

More information can be found reading this [article](https://web.dev/aspect-ratio/).