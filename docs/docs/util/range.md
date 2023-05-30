---
title: range
definition: range([start = 0], end, [step = 1])
description: Creates an array of numbers (positive or negative) progressing from `start` up to, but not including, `end`.
---


#### Arguments


```bash
{number} [start = 0] - The start of the range.
{number} [end] - The end of the range.
{number} [step = 1] - The value to increment or decrement by.
```


#### Returns


```bash
{number[]} - Returns the new array of numbers.
```


#### Example


```ts
_.range(4);
// => [0, 1, 2, 3]

_.range(-4);
// => [0, -1, -2, -3]

_.range(1, 5);
// => [1, 2, 3, 4]

_.range(0, 20, 5);
// => [0, 5, 10, 15]

_.range(0, -4, -1);
// => [0, -1, -2, -3]
```