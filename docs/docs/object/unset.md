---
title: unset
definition: unset(object, path)
description: Removes the specified property at the given path from the provided object.
---


#### Arguments


```bash
{Object} object - The input object from which the property needs to be removed.
{*} path - The path to the property that needs to be removed. Can be an array or a string.
```


#### Returns


```bash
{boolean} - Returns true if the property was successfully removed, false otherwise.
```


#### Example


```ts
const obj = { a: { b: { c: 1 } } };
unset(obj, 'a.b.c'); // => true
// obj is now { a: { b: {} } }

const obj2 = { a: { b: { c: 1 } } };
unset(obj2, 'a.b.d'); // => false
// obj2 remains { a: { b: { c: 1 } } }
```