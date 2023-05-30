---
title: divide
definition: divide(dividend, divisor)
description: Returns the result of dividing the `dividend` by the `divisor`.
---


#### Arguments


```bash
{number | string} dividend - The value to be divided.
{number | string} divisor - The value to divide the `dividend` by.
```


#### Returns


```bash
{number | NaN} - The quotient of the division. Returns `NaN` if the `dividend` or `divisor` is not a number.
```


#### Example


```ts
_.divide(8, 2);
// => 4

_.divide('8', '2');
// => 4

_.divide(1, 0);
// => NaN

_.divide('foo', 2);
// => NaN
```