---
title: set
definition: set(object, path, value)
description: Sets the value at path of object. If a portion of path doesn't exist, it's created.
---


#### Arguments


```bash
{Object} object - The object to modify.
{[string] | string} path - The path of the property to set.
{*} value - The value to set.
```


#### Returns


```bash
{Object} - The modified object.
```


#### Example


```ts
const object = { a: { b: { c: 3 } } };
set(object, 'a.b.c', 4);
// => { a: { b: { c: 4 } } }

set(object, ['x', '0', 'y', 'z'], 5);
// => { a: { b: { c: 3 } }, x: [{ y: { z: 5 } }] }
```