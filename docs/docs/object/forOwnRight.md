---
title: forOwnRight
definition: forOwnRight(object, [iteratee = identity])
description: Iterates over own enumerable string keyed properties of an object in reverse order, invoking `iteratee` for each property. The iteratee is invoked with three arguments (value, key, object).
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Object} - Returns `object`.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };
forOwnRight(object, (value, key) => {
  console.log(key, value);
});
// => Logs 'b 2' then 'a 1'.
```