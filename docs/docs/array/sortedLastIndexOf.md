---
title: sortedLastIndexOf
definition: sortedLastIndexOf(array, value)
description: Returns the index of the last occurrence of a specified value in a sorted array.
---


#### Arguments


```bash
{Array} array - The sorted array to search in.
{*} value - The value to search for.
```


#### Returns


```bash
{number} - The index of the last occurrence of the value, or -1 if not found.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 4, 4, 5, 6];

sortedLastIndexOf(arr, 4); // => 5
sortedLastIndexOf(arr, 7); // => -1
```