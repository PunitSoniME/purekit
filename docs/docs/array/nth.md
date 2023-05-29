---
title: nth
definition: nth(array, [index=0])
description: Gets the element at index `index` of `array`. If `n` is negative, the nth element from the end is returned.
---


#### Arguments


```bash
{Array} array - The array to query.
{number} [index=0] - The index of the element to return.
```


#### Returns


```bash
{T | undefined} - Returns the nth element of `array`
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];

_.nth(arr);
// => 1

_.nth(arr, 2);
// => 3

_.nth(arr, -1);
// => 5
```