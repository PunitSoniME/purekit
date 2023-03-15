---
title: intersectionBy
definition: intersectionBy([arrays], [iteratee = identity])
description: Returns an array of unique values that are included in all given arrays, using a provided iteratee function.
---


#### Arguments


```bash
{Array} array - The array to inspect.
{...Array} args - The arrays to intersect with.
{Function | string} [iteratee = identity] - The iteratee invoked per element.
```


#### Returns


```bash
{Array} - Returns the new array of intersecting values.
```


#### Example


```ts
intersectionBy([2.1, 1.2], [4.3, 2.4], [1.2, 2.4]);
// => [2.1]

intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]

intersectionBy([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], (o) => o.x);
// => [{'x': 1, 'y': 2}]
```