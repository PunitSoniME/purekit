---
title: set
definition: 
description: Sets the value at path of object. If a portion of path doesn't exist, it's created.
---


#### Arguments


```bash
{Object} object - The object to modify.
{Array<string>|string} path - The path of the property to set.
{*} value - The value to set.
```


#### Returns


```bash
{Object} - The modified object.
```


#### Example


```ts
const object = { a: { b: { c: 3 } } };set(object, 'a.b.c', 4);
```