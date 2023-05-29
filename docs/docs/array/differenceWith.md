---
title: differenceWith
definition: differenceWith(array, [values], [comparator])
description: Returns the difference between the first array and all other arguments using a provided comparator function.
---


#### Arguments


```bash
{Array} array - The array to process
{...Array} args - The arrays of values to exclude
{Function} comparator - The function invoked per element to compare values
```


#### Returns


```bash
{Array} - Returns a new array of filtered values
```


#### Example


```ts
const a = [1, 2, 3, 4];
const b = [3, 4];
const result = _.differenceWith(a, b, (a, b) => a === b);

console.log(result);
// => [1, 2]
```