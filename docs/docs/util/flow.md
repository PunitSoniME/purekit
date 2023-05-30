---
title: flow
definition: flow([funcs])
description: Creates a function that returns the result of calling the given functions in sequence, where each function consumes the return value of the function that precedes it.
---


#### Arguments


```bash
{Function | Function[]} funcs - The functions to compose.
```


#### Returns


```bash
{Function} - Returns the new composite function.
```


#### Example


```ts
const square = x => x * x;
const double = x => x * 2;

const func = _.flow(square, double);

func(3);
// => 18

_.flow(square, double, square)(2);
// => 32
```