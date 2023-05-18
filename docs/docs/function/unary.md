---
title: unary
definition: unary(fn)
description: Returns a function that accepts only one argument and passes it to the original function.
---


#### Arguments


```bash
{Function} fn - The function to wrap.
```


#### Returns


```bash
{Function} - A new function that accepts only one argument.
```


#### Example


```ts
const double = (x, y) => x * y;
const doubleUnary = unary(double);

console.log(doubleUnary(2, 3));
// => 2

console.log(doubleUnary(5, 5));
// => 5
```