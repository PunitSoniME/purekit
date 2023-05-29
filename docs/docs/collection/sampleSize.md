---
title: sampleSize
definition: sampleSize(collection, [length = 1])
description: Returns an array of elements selected randomly from `collection`.
---


#### Arguments


```bash
{Array} collection - The collection to sample from.
{number} [length = 1] The number of elements to randomly select from the `collection`.
```


#### Returns


```bash
{Array} - Returns the array of random elements.
```


#### Example


```ts
_.sampleSize([1, 2, 3, 4], 2);
// => [2, 4]

_.sampleSize({ a: 1, b: 2, c: 3, d: 4 }, 3);
// => [2, 4, 1]
```