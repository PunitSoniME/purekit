---
title: zipWith
definition: 
description: Creates an array of grouped elements, the first element of the tuples containing the first element of the passed arrays, and so on.
---


#### Arguments


```bash
{T[][]} arrays - The arrays to be grouped together.
{Function} [iteratee] - The function to combine the elements of the tuples in the resulting arrays.
```


#### Returns


```bash
{TResult[]} - Returns the new array of grouped elements.
```


#### Example


```ts
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
```