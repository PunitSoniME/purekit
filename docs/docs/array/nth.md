---
title: nth
definition: 
description: Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
---


#### Arguments


```bash
{Array} array - The array to query.
{number} [index=0] - The index of the element to return.
```


#### Returns


```bash

```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
console.log(nth(arr)); // Output: 1
console.log(nth(arr, 2)); // Output: 3
console.log(nth(arr, -1)); // Output: 5
```