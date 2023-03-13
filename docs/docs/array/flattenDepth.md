---
title: flattenDepth
definition: 
description: Flattens an array up to the specified depth.
---


#### Arguments


```bash
{Array} array - The array to flatten.
{number} [depth=1] - The maximum recursion depth.
```


#### Returns


```bash
{Array} - The new flattened array.
```


#### Example


```ts
flattenDepth([1, [2, [3, [4]], 5]], 2);
```