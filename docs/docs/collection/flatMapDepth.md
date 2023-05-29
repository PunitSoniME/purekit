---
title: flatMapDepth
definition: 
description: Applies a function to each element of a collection and then flattens the result up to a certain depth.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
{number} [depth=1] - The maximum recursion depth.
```


#### Returns


```bash
{T} - The new flattened array.
```


#### Example


```ts
_.flatMapDepth([1, 2, 3], (n) => [n, n], 2);
// => [1, 1, 2, 2, 3, 3]
```