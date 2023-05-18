---
title: average
definition: average(...nums)
description: Calculates the average of a given array of numbers.
---


#### Arguments


```bash
{...number[]} nums - The numbers to calculate the average from.
```


#### Returns


```bash
{number | string} - The average of the numbers. Returns 'NaN' if the array is empty.
```


#### Example


```ts
average(...[1, 2, 3]);
// => 2

average(1, 2, 3);
// => 2

average(4, 6, 2, 8);
// => 5

average();
// => 'NaN'
```