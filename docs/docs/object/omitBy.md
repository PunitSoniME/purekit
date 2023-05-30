---
title: omitBy
definition: omitBy(object, [predicate = identity])
description: Creates an object composed of the object properties predicate does not return truthy for. The predicate is invoked with two arguments (value, key).
---


#### Arguments


```bash
{Object} object - The source object.
{Function} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Object} - Returns the new object.
```


#### Example


```ts
const object = { 'a': 1, 'b': '2', 'c': 3 };

_.omitBy(object, (value) => typeof value === 'number');
// => { 'b': '2' }
```