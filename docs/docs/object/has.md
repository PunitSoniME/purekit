---
title: has
definition: 
description: Checks if the given object has the specified property path. Property path may be specified as a string
---


#### Arguments


```bash
{Object} object - The object to query.
{(string|Array|*)} path - The property path to check.
```


#### Returns


```bash

```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };has(object, 'a[0].b.c');
```