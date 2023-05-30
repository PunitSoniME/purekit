---
title: at
definition: at(object, [paths])
description: Creates an array of values corresponding to the specified paths of an object.
---


#### Arguments


```bash
{Object} object - The object to retrieve the values from.
{...(string | string[])} paths - The property paths to retrieve the values from.
```


#### Returns


```bash
{Array} - An array of values corresponding to the specified paths of the object.
```


#### Example


```ts
const object = { a: [{ b: { c: 3 } }, 4] };
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```