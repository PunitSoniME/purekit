---
title: without
definition: 
description: Returns a new array with all instances of the provided values removed.
---


#### Arguments


```bash
{T[]} array - The source array.
{...T} exception - The values to exclude from the returned array.
```


#### Returns


```bash
{T[]} - A new array without the specified values.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];const result = without(arr, 2, 4); // result = [1, 3, 5]
```