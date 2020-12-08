---
title: 'Debounce, Throttle and RequestAnimationFrame'
date: '2020-12-08'
---

# Optimize function calls on event handling

We usually use three methods when we want to mitigate calls on events like scrolling, resizing, etc.

## Debounce

The debounce method is used to delay multiple calls and call the last one afer the delay for example. This method is usually used to on resizing an element using a mouse or when typing in a text area for example.

## Throttle 

The throttle (rate-limiting) method allows a call to be made for every *X* time for example. It is useful to check the scrolling position for example.

## RequestAnimationFrame

This technique can be used similar to the throttle method. It is native to recent browsers (for older ones like IE9, a polyfill should be implemented).
For simple cases, it can be used instead of throttle .

## Links

A great article with more details can be found on [CSS Tricks](https://css-tricks.com/debouncing-throttling-explained-examples/).

Another article on how to use in React is found [here](https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/).