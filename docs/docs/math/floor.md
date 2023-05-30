---
title: floor
definition: floor(number, [precision=0])
description: Calculates the floor value of a given number up to a specified precision.
---


#### Arguments


```bash
{number} value - The number to calculate the floor value of.
{number} [precision=0] - The number of decimal places to round down to. Defaults to 0.
```


#### Returns


```bash
{number} - The floor value of the given number.
```


#### Example


```ts
_.floor(4.7);
// => 4

_.floor(-4.7);
// => -5

_.floor(4060, -2);
// => 4000

_.floor(0.046, 2);
// => 0.04
```