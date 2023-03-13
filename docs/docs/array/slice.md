---
title: slice
definition: 
description: Returns a new array containing the elements of the original array starting from `start` up to, but not including, `end`.
---


#### Arguments


```bash
{T[]} array - The original array.
{number} [start=0] - The start index (inclusive). Defaults to 0.
{number} [end=array.length] - The end index (exclusive). Defaults to the length of the array.
```


#### Returns


```bash
{T[]} - A new array containing the elements from the original array between the specified start and end indexes.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];slice(arr);         // [1, 2, 3, 4, 5]slice(arr, 2);      // [3, 4, 5]slice(arr, 2, 4);   // [3, 4]
```