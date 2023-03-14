---
title: setWith
definition: 
description: This method is like `set` except that it accepts `customizer` which is invoked to produce the
---


#### Arguments


```bash
{T} object - The object to modify.
{(any[] | string)} path - The path of the property to set.
{*} value - The value to set.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash
{T} - Returns the modified object.
```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };setWith(object, '[0].a.b.c', 4, (value) => value === 3 ? 1 : value);
```