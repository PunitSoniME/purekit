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
const result = _.sampleSize([1, 2, 3, 4], 2);
console.log(result);
// => [2, 4]

const result = _.sampleSize({ a: 1, b: 2, c: 3, d: 4 }, 3);
console.log(result);
// => [2, 4, 1]
```