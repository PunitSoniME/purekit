---
title: invertBy
definition: invertBy(object, [iteratee = identity])
description: Creates an object composed of keys generated from the results of running each element of object thru `iteratee`.
---


#### Arguments


```bash
{Object} object - The object to invert.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Object} - The new inverted object.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2, 'c': 1 };
invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

invertBy(object, (value) => `group_${value}`);
// => { 'group_1': ['a', 'c'], 'group_2': ['b'] }
```