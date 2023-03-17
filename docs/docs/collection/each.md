---
title: each
definition: each(collection, iteratee = identity)
description: Applies a function to each element in a collection.
---

#### Arguments

```bash
{[]} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function to apply to each element.
```

#### Returns

```bash
{[]} - The original collection.
```

#### Example

```ts
const arr = [1, 2, 3];
each(arr, n => console.log(n)); // => 1, 2, 3

const obj = { a: 1, b: 2, c: 3 };
each(obj, (value, key) => console.log(key, value)); // => "a 1", "b 2", "c 3"
```