---
title: cloneDeep
definition: 
description: Creates a deep clone of the input value.
---


#### Arguments


```bash
{T} value - The input value to clone.
```


#### Returns


```bash
{T} - The cloned value.
```


#### Example


```ts
const obj = { a: 1, b: { c: 2 } };const clone = cloneDeep(obj);obj.b.c = 3;console.log(clone.b.c); // Output: 2
```