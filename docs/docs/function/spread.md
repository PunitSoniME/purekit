---
title: spread
definition: 
description: Returns a function that takes an array of arguments and applies it to the given function as separate arguments.
---


#### Arguments


```bash
{Function} func - The function to be called with the spread arguments.
```


#### Returns


```bash

```


#### Example


```ts
const sum = (x, y, z) => x + y + z;const spreadSum = spread(sum);spreadSum([1, 2, 3]); // Returns: 6
```