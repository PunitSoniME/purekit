---
title: flattenDeep
definition: 
description: Recursively flattens `array`.
---


#### Arguments


```bash
{T[]} array - The array to flatten.
```


#### Returns


```bash
{any[]} - Returns the new flattened array.
```


#### Example


```ts
flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```