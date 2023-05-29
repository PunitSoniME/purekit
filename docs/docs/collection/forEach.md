---
title: forEach
definition: forEach(collection, iteratee = identity)
description: Applies a function to forEach element in a collection.
---

#### Arguments

```bash
{Array} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function to apply to each element.
```

#### Returns

```bash
{Array} - The original collection.
```

#### Example

```ts
const arr = [1, 2, 3];

_.forEach(arr, n => console.log(n));
// => 1, 2, 3

const obj = { a: 1, b: 2, c: 3 };
_.forEach(obj, (value, key) => console.log(key, value));
// => "a 1", "b 2", "c 3"
```