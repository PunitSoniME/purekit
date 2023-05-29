---
title: curry
definition: curry(func, [arity = func.length])
description: Creates a curried function from the original function.
---


#### Arguments


```bash
{Function} func - The function to curry.
```


#### Returns


```bash
{Function} - Returns the curried function.
```


#### Example


```ts
const sum = (a, b, c) => a + b + c;
const curriedSum = _.curry(sum);
curriedSum(1)(2)(3);
// => 6

const curriedSum1 = curriedSum(1);
const curriedSum12 = curriedSum1(2);
curriedSum12(3);
// => 6
```