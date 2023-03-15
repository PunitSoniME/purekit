---
title: without
definition: without(array, [values])
description: Returns a new array with all instances of the provided values removed.
---


#### Arguments


```bash
{Array} array - The source array.
{...*} exception - The values to exclude from the returned array.
```


#### Returns


```bash
{Array} - A new array without the specified values.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
const result = without(arr, 2, 4); // => [1, 3, 5]
```