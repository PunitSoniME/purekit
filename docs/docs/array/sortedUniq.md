---
title: sortedUniq
definition: 
description: Creates a new array with all duplicate values removed. Assumes the input array is already sorted.
---


#### Arguments


```bash
{T[]} array - The input array to remove duplicates from.
```


#### Returns


```bash
{T[]} - Returns the new array of unique values.
```


#### Example


```ts
sortedUniq([1, 1, 2, 2, 3, 4, 4, 5]); // Returns: [1, 2, 3, 4, 5]
```