---
title: 'React 18 startTransition'
date: '2022-01-23'
---

# startTransition

[React 18](https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html) introduces a new concurrent feature called [startTransition](https://github.com/reactwg/react-18/discussions/41) which aims to solve problems we tried to solve using [debounce and throttle](https://css-tricks.com/debouncing-throttling-explained-examples/), and much more.

This [thread](https://github.com/reactwg/react-18/discussions/65) gives a deep dive example of how it solves the problem of UI responsiveness when there is expensive computation taking place.

Before React 18, we tend to use debounce (or throttle depending on the situation) to schedule this compute intensive task at a given time *T* so that the UI feels more responsive to other events. But every time the task will start after *T* has elapsed, even if it takes less time than *T*. And the task will still occur as a whole chunk, blocking the thread during this time. 

This is where startTransition API brings a new approach to deal with these problems.
It can:
- split tasks into small chunks and be smart enough to let the browser process incoming events (mouse events for example) -> **yielding**
- manage an urgent update in priority skipping pending ones -> **interrupting**
- update using new state by disposing of unfinished task with stale state -> **skipping old results**
