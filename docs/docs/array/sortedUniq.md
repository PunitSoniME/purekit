---
title: sortedUniq
definition: sortedUniq(array)
description: Creates a new array with all duplicate values removed. Assumes the input array is already sorted.
---


#### Arguments


```bash
{Array} array - The input array to remove duplicates from.
```


#### Returns


```bash
{Array} - Returns the new array of unique values.
```


#### Example


```ts
_.sortedUniq([1, 1, 2, 2, 3, 4, 4, 5]);
// => [1, 2, 3, 4, 5]
```