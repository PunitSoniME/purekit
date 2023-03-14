---
title: sampleSize
definition: 
description: Returns an array of elements selected randomly from `collection`.
---


#### Arguments


```bash
{T} collection - The collection to sample from.
```


#### Returns


```bash
{T} - Returns the array of random elements.
```


#### Example


```ts
const result = sampleSize([1, 2, 3, 4], 2);console.log(result); // => [2, 4]const result = sampleSize({ a: 1, b: 2, c: 3, d: 4 }, 3);console.log(result); // => [2, 4, 1]
```