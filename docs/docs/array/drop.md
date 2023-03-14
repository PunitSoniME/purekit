---
title: drop
definition: drop(array, [n=1])
description: Creates a slice of `array` with `n` elements dropped from the beginning.
---


#### Arguments


```bash
{Array} array - The array to query.
{number} [n=1] - The number of elements to drop.
```


#### Returns


```bash
{Array} - Returns the slice of `array`.
```


#### Example


```ts
drop([1, 2, 3, 4]); // => [2, 3, 4]
drop([1, 2, 3, 4], 2); // => [3, 4]
```