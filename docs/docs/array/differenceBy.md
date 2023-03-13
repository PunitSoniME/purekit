---
title: differenceBy
definition: 
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
```