---
title: overArgs
definition: overArgs(func, [transforms = [identity]])
description: Creates a function that applies the provided functions to the arguments of the created function.
---


#### Arguments


```bash
{Function} fn - The function to apply the transforms to.
{Function[]} transforms - The transform functions to apply to the arguments of the function.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const double = (n) => n * 2;
const square = (n) => n * n;
const add = (a, b) => a + b;
const addDoubleSquare = _.overArgs(add, [double, square]);

addDoubleSquare(2, 3);
// => 13 // ((2 * 2) + (3 * 3 * 2))
```