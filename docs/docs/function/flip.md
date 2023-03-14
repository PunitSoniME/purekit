---
title: flip
definition: 
description: Creates a new function that takes the same arguments as the original function,
---


#### Arguments


```bash
{Function} func - The function to flip argument order for.
```


#### Returns


```bash
{Function} - A new function with flipped argument order.
```


#### Example


```ts
function foo(a, b, c) {  console.log(a, b, c);}const flippedFoo = flip(foo);foo(1, 2, 3); // Output: 1, 2, 3flippedFoo(1, 2, 3); // Output: 2, 1, 3
```