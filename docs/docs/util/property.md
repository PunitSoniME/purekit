---
title: property
definition: 
description: Creates a function that returns the value at the specified path of an object.
---


#### Arguments


```bash
{string|any[]} path - The path of the property to get.
```


#### Returns


```bash

```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };const getValue = property('a[0].b.c');getValue(object);
```