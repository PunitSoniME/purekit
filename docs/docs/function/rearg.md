---
title: rearg
definition: rearg(func, indexes)
description: Creates a function that invokes `func` with arguments rearranged according to
---


#### Arguments


```bash
{Function} func - The function to rearrange arguments for.
{Array} order - The specified order of argument positions.
```


#### Returns


```bash
{Function} - The new function with rearranged arguments.
```


#### Example


```ts
const originalFn = (a, b, c) => [a, b, c];
const reargFn = rearg(originalFn, [2, 0, 1]);

originalFn(1, 2, 3); // => [1, 2, 3]
reargFn(1, 2, 3); // => [3, 1, 2]
```