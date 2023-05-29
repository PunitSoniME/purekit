---
title: spread
definition: spread(func, [start = 0])
description: Returns a function that takes an array of arguments and applies it to the given function as separate arguments.
---


#### Arguments


```bash
{Function} func - The function to be called with the spread arguments.
{number} [start = 0]: The start position of the spread.
```


#### Returns


```bash
{Function} - The new function that takes an array of arguments and applies it to the given function as separate arguments.
```


#### Example


```ts
const sum = (x, y, z) => x + y + z;
const spreadSum = _.spread(sum);

spreadSum([1, 2, 3]);
// => 6
```