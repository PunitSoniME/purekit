---
title: multiply
definition: multiply(multiplier, multiplicand, ...args)
description: Returns the product of all the numbers passed in as arguments.
---


#### Arguments


```bash
{numbers} numbers - The numbers to multiply.
```


#### Returns


```bash
{number} - The product of all the numbers.
```


#### Example


```ts
_.multiply(1, 2, 3, 4, 5);
// => 120

_.multiply(3, -5);
// => -15
```