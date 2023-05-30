---
title: get
definition: get(object, path, [defaultValue])
description: Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned.
---


#### Arguments


```bash
{Object} object - The object to query.
{(string | Array | *)} path - The path of the property to get.
{*} [defaultValue] - The value returned for undefined resolved values.
```


#### Returns


```bash
{*} - Returns the resolved value.
```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(object, 'a[0].b.c');
// => 3

_.get(object, ['a', '0', 'b', 'c']);
// => 3

_.get(object, 'a.b.c', 'default');
// => 'default'
```