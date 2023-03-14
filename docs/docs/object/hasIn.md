---
title: hasIn
definition: 
description: Checks if the given object has the specified property path. Property path may be specified as a string
---


#### Arguments


```bash
{*} object - The value to query.
{(string|Array|*)} path - The property path to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the property exists, else `false`.
```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };hasIn(object, 'a[0].b.c');
```