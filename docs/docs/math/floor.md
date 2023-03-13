---
title: floor
definition: 
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
floor(4.7); // returns 4floor(-4.7); // returns -5floor(4060, -2); // returns 4000floor(0.046, 2); // returns 0.04
```