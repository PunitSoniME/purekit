---
title: reduce
definition: 
description: Reduces a collection to a single value by iterating over the elements of the collection.
---


#### Arguments


```bash
{Array<T> | Object} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
{*} [initialValue] - The initial value.
```


#### Returns


```bash
{*} - Returns the accumulated value.
```


#### Example


```ts
reduce([1, 2, 3], (acc, n) => acc + n); // Returns: 6@examplereduce( { a: 1, b: 2, c: 1 }, (result, value, key) => {   (result[value] || (result[value] = [])).push(key);   return result; }, {});
```