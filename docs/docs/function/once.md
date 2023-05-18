---
title: once
definition: once(fn)
description: Creates a new function that can only be called once. Subsequent calls to the returned function will always return the same result as the first call.
---


#### Arguments


```bash
{Function} fn - The function to be called once
```


#### Returns


```bash
{Function} - A function that can only be called once
```


#### Example


```ts
const add = (a, b) => a + b;
const addOnce = once(add);

console.log(addOnce(2, 3));
// => 5

console.log(addOnce(2, 3));
// => undefined
```