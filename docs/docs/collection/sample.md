---
title: sample
definition: sample(collection)
description: Returns a random element from a collection
---


#### Arguments


```bash
{Array | Object} collection - The collection to sample from
```


#### Returns


```bash
{*} - Returns the random element
```


#### Example


```ts
_.sample([1, 2, 3, 4, 5]);
// => a random number from the array

_.sample({ a: 1, b: 2, c: 3 });
// => a random value from the object
```