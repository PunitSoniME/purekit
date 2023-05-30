---
title: average
definition: averageBy(array, fn)
description: Calculates the average value of an array by applying a transformation function to each element.
---


#### Arguments


```bash
{Array} array - The array of elements to calculate the average from.
{Function | string} fn - The transformation function or property key to be applied to each element.
```


#### Returns


```bash
{number} - The average value of the transformed elements.
```


#### Example


```ts
const numbers = [1, 2, 3];
_.averageBy(numbers, x => x * 2);
// => 4

const students = [
  { name: 'Alice', score: 80 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 75 }
];
_.averageBy(students, 'score');
// => 81.66666666666667
```