---
title: subtract
definition: subtract(minuend, subtrahend)
description: Subtracts all the numbers passed in as arguments from the first number passed in.
---


#### Arguments


```bash
{...number} numbers - The numbers to subtract from the first number.
```


#### Returns


```bash
{number} - The result of subtracting all the numbers from the first number.
```


#### Example


```ts
_.subtract(20, 5, 3, 2);
// => 10

_.subtract(10, 5, 2, 3);
// => 0
```