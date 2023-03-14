---
title: dropRight
definition: dropRight(array, [n=1])
description: Creates a slice of an array with `n` elements dropped from the end.
---


#### Arguments


```bash
{Array} array - The array to query.
{number} [n=1] - The number of elements to drop from the end.
```


#### Returns


```bash
{Array} - Returns the slice of `array`.
```


#### Example


```ts
dropRight([1, 2, 3, 4, 5], 2);  // => [1, 2, 3]

dropRight([1, 2, 3, 4, 5]);// => [1, 2, 3, 4]
```