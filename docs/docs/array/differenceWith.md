---
title: differenceWith
definition: 
description: Returns the difference between the first array and all other arguments using a provided comparator function
---


#### Arguments


```bash
{T[]} array - The array to process
{...any[]} args - The arrays of values to exclude
{Function} comparator - The function invoked per element to compare values
```


#### Returns


```bash
{T[]} - Returns a new array of filtered values
```


#### Example


```ts
const a = [1, 2, 3, 4];const b = [3, 4];const result = differenceWith(a, b, (a, b) => a === b);console.log(result);
```