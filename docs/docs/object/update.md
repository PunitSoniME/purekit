---
title: update
definition: update(object, path, updater)
description: Updates the value of a property at the specified path in the provided object using the given updater function.
---


#### Arguments


```bash
{Object} object - The input object to update.
{string|any} path - The path to the property to update. Can be an array or a string.
{Function} updater - The function that will be used to update the property value.
```


#### Returns


```bash
{Object} - The updated object.
```


#### Example


```ts
const obj = { a: { b: { c: 1 } } };
update(obj, 'a.b.c', (val) => val + 1);
// => { a: { b: { c: 2 } } }

const obj2 = { a: { b: { c: 1 } } };
update(obj2, 'a.b.d', (val) => 2);
// => { a: { b: { c: 1, d: 2 } } }
```