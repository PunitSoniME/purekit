---
title: differenceBy
definition: differenceBy(array, [values], [iteratee = identity])
description: Returns the difference between the first array and other arrays or values, using a comparator function to compare values.
---


#### Arguments


```bash
{Array} array - The array to inspect.
{...Array|Function|string} args - The values or arrays to exclude.
{Function|string} [iteratee=identity] - The iteratee invoked per element to generate the criterion by which uniqueness is computed.
```


#### Returns


```bash
{Array} - Returns the new array of filtered values.
```


#### Example


```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
_.differenceBy(arr1, arr2, Math.floor);
// => [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
_.differenceBy(arr3, arr4, 'x');
// => [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
_.differenceBy(arr5, { x: 2 }, 'x');
// => [{ x: 1 }, { x: 3 }]
```