---
title: takeRight
definition: takeRight(array, [length=1])
description: Creates a new array with the last `length` elements of `array`.
---


#### Arguments


```bash
{Array} array - The input array.
{number} [length=1] - The number of elements to take.
```


#### Returns


```bash
{Array} - Returns the new array.
```


#### Example


```ts
takeRight([1, 2, 3, 4, 5], 3);  // => [3, 4, 5]

takeRight([1, 2, 3, 4, 5]); // => [5]
```