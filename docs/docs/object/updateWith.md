---
title: updateWith
definition: updateWith(object, path, updater, [customizer])
description: Updates the value of a property at the specified path in the provided object using the given updater function and a customizer function if provided.
---


#### Arguments


```bash
{Object} object - The input object to update.
{string | Array} path - The path to the property to update. Can be an array or a string.
{Function} updater - The function that will be used to update the property value.
{*} customizer - The function that will be used to customize the updated value. Optional.
```


#### Returns


```bash
{Object} - The updated object.
```


#### Example


```ts
const obj = { a: { b: { c: 1 } } };
_.updateWith(obj, 'a.b.c', (val) => val + 1);
// => { a: { b: { c: 2 } } }

const obj2 = { a: { b: { c: 1 } } };
_.updateWith(obj2, 'a.b.d', (val) => 2);
// => { a: { b: { c: 1, d: 2 } } }
```