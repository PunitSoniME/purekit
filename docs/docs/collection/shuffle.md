---
title: shuffle
definition: shuffle(collection)
description: Shuffles the given collection by returning a new array or object with the same elements in a randomized order.
---


#### Arguments


```bash
{Array | Object} collection - The collection to shuffle.
```


#### Returns


```bash
{Array} - The shuffled collection.
```


#### Example


```ts
const result = shuffle([1, 2, 3, 4, 5]);
//  => [4, 5, 1, 3, 2]

const result2 = shuffle({a: 1, b: 2, c: 3, d: 4, e: 5});
//  => {e: 5, a: 1, d: 4, b: 2, c: 3}
```