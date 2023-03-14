---
title: flattenDeep
definition: flattenDeep{Array}
description: Recursively flattens `array`.
---


#### Arguments


```bash
{Array} array - The array to flatten.
```


#### Returns


```bash
{Array} - Returns the new flattened array.
```


#### Example


```ts
flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```