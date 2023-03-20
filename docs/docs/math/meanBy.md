---
title: meanBy
definition: meanBy(array, [iteratee = identity])
description: Calculates the mean value of an array of objects using the given iteratee.
---


#### Arguments


```bash
{Array} collection - The array of objects to calculate the mean for.
{Function} iteratee - The iteratee to use for extracting the values to calculate the mean.
```


#### Returns


```bash
{number} - The mean value of the array.
```


#### Example


```ts
meanBy([{ value: 1 }, { value: 2 }, { value: 3 }], (obj) => obj.value);
// => 2

meanBy([{ value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }], (obj) => obj.value);
// => 5
```