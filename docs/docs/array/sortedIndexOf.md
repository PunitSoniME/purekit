---
title: sortedIndexOf
definition: 
description: Returns the index of the first occurrence of the specified value in a sorted array, or -1 if not found.
---


#### Arguments


```bash
{T[]} array - The sorted input array to search.
{T} value - The value to search for.
```


#### Returns


```bash
{number} - The index of the first occurrence of the value, or -1 if not found.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];console.log(sortedIndexOf(arr, 3)); // Output: 2console.log(sortedIndexOf(arr, 6)); // Output: -1
```