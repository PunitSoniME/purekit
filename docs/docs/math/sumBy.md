---
title: sumBy
definition: sumBy(array, [iteratee = identity])
description: Returns the sum of all the values obtained by applying the iteratee function to each element in the array.
---


#### Arguments


```bash
{Array} numbers - The array of numbers to sum.
{Function} [iteratee = identity] - The function to apply to each element to get its value for summing.
```


#### Returns


```bash
{number} - The sum of all the values obtained by applying the iteratee function to each element in the array.
```


#### Example


```ts
_.sumBy([1, 2, 3, 4, 5], (num) => num);
// => 15

_.sumBy([{ val: 1 }, { val: 2 }, { val: 0 }], (obj) => obj.val);
// => 3
```