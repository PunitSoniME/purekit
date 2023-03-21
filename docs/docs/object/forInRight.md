---
title: forInRight
definition: forInRight(object, [iteratee = identity])
description: Iterates over an object's own and inherited enumerable string keyed properties in reverse order, calling `iteratee` for each property. The `iteratee` is invoked with three arguments, (value, key, object). Iteratee functions may exit iteration early by explicitly returning `false`.
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Object} - Returns the object.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };
forInRight(object, (value, key) => {
  console.log(key);
});
```