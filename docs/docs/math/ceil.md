---
title: ceil
definition: ceil(number, [precision = 0])
description: Calculates the ceiling value of a given number to the nearest precision value.
---


#### Arguments


```bash
{number} value - The number to be rounded.
{number} [precision = 0] - The precision value to round the number to. Default is 0.
```


#### Returns


```bash
{number} - The rounded ceiling value.
```


#### Example


```ts
ceil(4.006);
// => 5

ceil(6.004, 2);
// => 6.01

ceil(6040, -2);
// => 6100
```