---
title: intersectionBy
definition: 
description: Returns an array of unique values that are included in all given arrays, using a provided iteratee function.
---


#### Arguments


```bash
{Array} array - The array to inspect.
{...Array} args - The arrays to intersect with.
{Function|string} [iteratee=identity] - The iteratee invoked per element.
```


#### Returns


```bash
{Array} - Returns the new array of intersecting values.
```


#### Example


```ts
intersectionBy([2.1, 1.2], [4.3, 2.4], [1.2, 2.4]);
```