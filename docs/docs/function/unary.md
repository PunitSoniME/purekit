---
title: unary
definition: 
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
const double = (x, y) => x * y;const doubleUnary = unary(double);console.log(doubleUnary(2, 3)); // Output: 2console.log(doubleUnary(5, 5)); // Output: 5
```