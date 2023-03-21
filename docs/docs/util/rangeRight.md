---
title: rangeRight
definition: range([start = 0], end, [step = 1])
description: Creates an array of numbers (positive or negative) progressing from `start` up to or down to `end` (depending on whether `end` is greater than `start` or not), separated by increments of `step`.
---


#### Arguments


```bash
{number} [start = 0] - The start of the range.
{number} [end] - The end of the range.
{number} [step = 1] - The value to increment or decrement by.
```


#### Returns


```bash
{Array} - Returns the new array of numbers.
```


#### Example


```ts
rangeRight(4);
// => [3, 2, 1, 0]

rangeRight(-4);
// => [-3, -2, -1, 0]

rangeRight(1, 5);
// => [4, 3, 2, 1]

rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

rangeRight(1, 4, 0);
// => [1, 1, 1]
```