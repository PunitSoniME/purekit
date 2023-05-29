---
title: fill
definition: fill(array, value, [start = 0], [end = array.length])
description: Fill an array with a specified value from a start index to an end index.
---


#### Arguments


```bash
{Array} array - The input array to be filled.
{*} value - The value to fill the array with.
{number} [start = 0] - The start index to begin filling the array from.
{number} [end = array.length] - The end index to stop filling the array at.
```


#### Returns


```bash
{Array} - A new filled array.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
const filledArr = _.fill(arr, 0, 2, 4);
console.log(filledArr);
// => [1, 2, 0, 0, 5]

const arr2 = [1, 2, 3, 4, 5];
const filledArr2 = _.fill(arr2, '*', 1);
console.log(filledArr2);
// => [1, '*', '*', '*', '*', '*']
```