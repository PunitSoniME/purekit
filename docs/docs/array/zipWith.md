---
title: zipWith
definition: zipWith([arrays], [iteratee = identity])
description: Creates an array of grouped elements, the first element of the tuples containing the first element of the passed arrays, and so on.
---


#### Arguments


```bash
{Array} arrays - The arrays to be grouped together.
{Function} [iteratee = identity] - The function to combine the elements of the tuples in the resulting arrays.
```


#### Returns


```bash
{Array} - Returns the new array of grouped elements.
```


#### Example


```ts
_.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
// => [111, 222]
```