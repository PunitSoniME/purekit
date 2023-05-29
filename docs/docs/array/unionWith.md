---
title: unionWith
definition: unionWith([arrays], [comparator])
description: This method creates an array of unique values that are included in all given arrays, using a comparator function for equality comparisons.
---


#### Arguments


```bash
{Array} ...array - The array to inspect.
{Function} [comparator = identity] - The function to compare values.
```


#### Returns


```bash
{Array} - Returns the new array of combined values.
```


#### Example


```ts
_.unionWith([{ x: 1, y: 2 }, { x: 2, y: 1 }], [{ x: 1, y: 2 }, { x: 2, y: 1 }], (a, b) => a.x === b.x);
// => [{ x: 1, y: 2 }, { x: 2, y: 1 }]
```