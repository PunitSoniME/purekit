---
title: curry
definition: 
description: Creates a curried function from the original function.
---


#### Arguments


```bash
{Function} func - The function to curry.
```


#### Returns


```bash

```


#### Example


```ts
const sum = (a, b, c) => a + b + c;const curriedSum = curry(sum);curriedSum(1)(2)(3); // 6const curriedSum1 = curriedSum(1);const curriedSum12 = curriedSum1(2);curriedSum12(3); // 6
```