---
title: 'Memory Leak Hunter'
date: '2021-08-23'
---

[Memory leaks](https://web.dev/detached-window-memory-leaks/) can be tricky to detect in JavaScript, particularly in detached windows.

Identify memory leaks using [heap snapshots](https://developer.chrome.com/docs/devtools/memory-problems/#discover_detached_dom_tree_memory_leaks_with_heap_snapshots) from chrome dev tools for example. Additionally, use [Heap Cleaner](https://github.com/ykahlon/heap-cleaner) to highlight specific nodes.

Some ways to mitigate memory leaks:
- listen to the `pagehide` event to remove the reference to a modal window for example.
- use [postmessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) which reduces the number of references between objects.
- use [WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef).
