---
title: map
definition: map(collection, [iteratee = sidentity])
description: Creates an array or object of values by running each element in `collection` through `iteratee`.
---


#### Arguments


```bash
{Array | Object} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Array} - Returns the new mapped array or object.
```

#### Example


```ts
map([1, 2, 3], n => n * 2);
// => [2, 4, 6]

map({a: 1, b: 2, c: 3}, n => n * 2);
// => { a: 2, b: 4, c: 6 }
```