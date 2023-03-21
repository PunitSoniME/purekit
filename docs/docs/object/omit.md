---
title: omit
definition: omit(object, [paths])
description: Creates an object composed of the object properties that are not included in the given `paths`.
---


#### Arguments


```bash
{Object} object - The source object.
{Array} paths - The property paths to omit.
```


#### Returns


```bash
{Object} - Returns the new object.
```


#### Example


```ts
omit({a: 1, b: 2, c: 3}, ['a', 'c']);
// => {b: 2}
```