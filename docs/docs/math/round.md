---
title: round
definition: round(number, [precision = 0])
description: Returns the number rounded to the specified number of decimal places.
---


#### Arguments


```bash
{number} value - The number to round.
{number} [precision = 0] - The number of decimal places to round to.
```


#### Returns


```bash
{number} - The number rounded to the specified number of decimal places.
```


#### Example


```ts
_.round(3.14159265359, 2);
// => 3.14

_.round(3.14159265359);
// => 3
```