---
title: unionWith
definition: 
description: This method creates an array of unique values that are included in all given arrays, using a comparator function for equality comparisons.
---


#### Arguments


```bash
{T[]} array - The array to inspect.
{...T[][]} args - The arrays to check for the union.
{Function} [comparator=identity] - The function to compare values.
```


#### Returns


```bash

```


#### Example


```ts
unionWith([{ x: 1, y: 2 }, { x: 2, y: 1 }], [{ x: 1, y: 2 }, { x: 2, y: 1 }], (a, b) => a.x === b.x);
```