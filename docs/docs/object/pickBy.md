---
title: pickBy
definition: 
description: Creates an object composed of the object properties predicate returns truthy for.
---


#### Arguments


```bash
{Object} object - The source object.
{Function} predicate - The function invoked per iteration.
```


#### Returns


```bash
{Object} - The new object.
```


#### Example


```ts
const object = { 'a': 1, 'b': '2', 'c': 3 };pickBy(object, (value) => typeof value === 'number');
```