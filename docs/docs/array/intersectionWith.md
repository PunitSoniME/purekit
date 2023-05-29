---
title: intersectionWith
definition: intersectionWith([arrays], [comparator])
description: This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
---


#### Arguments


```bash
{Array} ...array - The array to inspect.
{Function} comparator - The arrays of values to inspect.
```


#### Returns


```bash
{Array} - Returns the new array of intersecting values.
```


#### Example


```ts
_.intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```