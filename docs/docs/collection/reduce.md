---
title: reduce
definition: reduce(collection, [iteratee = identity], [accumulator])
description: Reduces a collection to a single value by iterating over the elements of the collection.
---

#### Arguments


```bash
{Array | Object} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
{*} [initialValue] - The initial value.
```


#### Returns


```bash
{*} - Returns the accumulated value.
```


#### Example


```ts
_.reduce([1, 2, 3], (acc, n) => acc + n);
// => 6

_.reduce(
 { a: 1, b: 2, c: 1 },
 (result, value, key) => {
   (result[value] || (result[value] = [])).push(key);
   return result;
 },
 {}
);
// => { '1': ['a', 'c'], '2': ['b'] }
```