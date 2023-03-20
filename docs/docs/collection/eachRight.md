---
title: eachRight
definition: eachRight(collection, iteratee = identity)
description: Applies an iteratee function to each element of an array-like object, starting from the end of the collection.
---

#### Arguments

```bash
{Array} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```

#### Returns

```bash
{Array} - Returns the original collection.
```

#### Example

```ts
const arr = [1, 2, 3];
eachRight(arr, (value, index) => {
  console.log(`Value: ${value} Index: ${index}`);
});
// Value: 3 Index: 2
// Value: 2 Index: 1
// Value: 1 Index: 0

const obj = { a: 1, b: 2, c: 3 };

eachRight(obj, (value, key) => {
  console.log(`Key: ${key} Value: ${value}`);
});
// Key: c Value: 3
// Key: b Value: 2
// Key: a Value: 1
```