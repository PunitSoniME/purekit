---
title: inRange
definition: inRange(number, [start = 0], end)
description: Checks if the given number is within the specified range.
---


#### Arguments


```bash
{number} number - The number to check.
{number} [start = 0] - The start of the range (inclusive if `end` is defined).
{number} [end] - The end of the range (exclusive if defined).
```


#### Returns


```bash
{boolean} - `true` if the number is in range, `false` otherwise.
```


#### Example


```ts
_.inRange(2, 0, 5);
// => true

_.inRange(2, 5, 0);
// => true

_.inRange(2, 2, 5);
// => true

_.inRange(5, 0, 5);
// => false
```