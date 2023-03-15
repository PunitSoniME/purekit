---
title: sortedUniqBy
definition: sortedUniqBy(array, [iteratee])
description: This function creates a new array with unique values from the input `array`,
---


#### Arguments


```bash
{Array} array - The input array to process.
{Function} iteratee - The function invoked per iteration.
```


#### Returns


```bash
{Array} - A new array of unique values.
```


#### Example


```ts
const array = [{ x: 1 }, { x: 2 }, { x: 1 }];

const result = sortedUniqBy(array, o => o.x);

console.log(result); // => [{ x: 1 }, { x: 2 }]
```