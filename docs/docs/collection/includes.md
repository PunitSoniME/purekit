---
title: includes
definition: includes(collection, value, [fromIndex=0])
description: Checks if the provided value is in the collection. If the collection is an object, the values of the object will be searched.
---


#### Arguments


```bash
{Object | Array | string} collection - The collection to inspect.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{boolean} - Returns `true` if `predicate` is found, else `false`.
```


#### Example


```ts
includes([1, 2, 3], 1);
// => true

includes({ 'a': 1, 'b': 2 }, 1);
// => true

includes('hello', 'e');
// => true
```