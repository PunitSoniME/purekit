---
title: assign
definition: assign(object, [sources])
description: Creates a new object that combines the properties of the specified objects.
---


#### Arguments


```bash
{object} object - The object to which the properties of the other objects will be assigned.
{...object} sources - The objects whose properties will be assigned to the `object`.
```


#### Returns


```bash
{object} - A new object that combines the properties of the specified objects.
```


#### Example


```ts
_.assign({ a: 1 }, { b: 2 }, { c: 3 });
// => { a: 1, b: 2, c: 3 }

_.assign({ a: 1, b: 2 }, { c: 3, d: 4 });
// => { a: 1, b: 2, c: 3, d: 4 }
```