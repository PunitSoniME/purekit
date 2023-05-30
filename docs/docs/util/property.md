---
title: property
definition: property(path)
description: Creates a function that returns the value at the specified path of an object.
---


#### Arguments


```bash
{string | Array} path - The path of the property to get.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };
const getValue = _.property('a[0].b.c');

getValue(object);
// => 3
```