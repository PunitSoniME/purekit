---
title: flatMap
definition: 
description: Applies the provided function to each element of an array and then flattens the result.
---


#### Arguments


```bash
{Array|Object} collection - The array to iterate over.
{Function} iteratee - The function to apply to each element of the array.
```


#### Returns


```bash
{Array} - A new flattened array.
```


#### Example


```ts
_.flatMap([1, 2, 3], (n) => [n, n * 2]);
// => [1, 2, 2, 4, 3, 6]
```