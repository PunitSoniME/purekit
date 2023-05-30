---
title: keys
definition: keys(object)
description: Returns an array of the own enumerable property names of the given object.
---


#### Arguments


```bash
{Object} object - The object to retrieve the keys from.
```


#### Returns


```bash
{Array} - An array of the object's keys.
```


#### Example


```ts
const object = { a: 1, b: 2, c: 3 };
_.keys(object);
// => ['a', 'b', 'c']
```