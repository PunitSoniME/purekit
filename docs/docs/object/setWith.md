---
title: setWith
definition: setWith(object, path, value, [customizer])
description: This method is like `set` except that it accepts `customizer` which is invoked to produce the value to be set. If `customizer` returns `undefined` the value is not set.
---


#### Arguments


```bash
{Object} object - The object to modify.
{(any[] | string)} path - The path of the property to set.
{*} value - The value to set.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash
{Object} - Returns the modified object.
```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };
setWith(object, '[0].a.b.c', 4, (value) => value === 3 ? 1 : value);
// => { 'a': [{ 'b': { 'c': 1 } }] }
```