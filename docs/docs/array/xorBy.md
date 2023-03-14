---
title: xorBy
definition: 
description: Creates an array of unique values that are included in exactly one of the given arrays
---


#### Arguments


```bash
{Array} array - The array to inspect.
{...any} args - The arrays to inspect.
{Function} [iteratee=identity] - The iteratee invoked per element.
```


#### Returns


```bash
{Array} - Returns the new array of filtered values.
```


#### Example


```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6];
const arr3 = [1, 2, 5];
const result = xorBy(arr1, arr2, arr3, (n) => n % 2);
console.log(result); // Output: [3, 6]
```