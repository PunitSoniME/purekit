---
title: flow
definition: 
description: Creates a function that returns the result of calling the given functions in sequence, where each function consumes the return value of the function that precedes it.
---


#### Arguments


```bash
{Function | Function[]} funcs - The functions to compose.
```


#### Returns


```bash

```


#### Example


```ts
const square = x => x * x;const double = x => x * 2;const func = flow(square, double);
```