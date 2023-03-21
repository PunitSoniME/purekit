---
title: pick
definition: pick(object, [paths])
description: Creates an object composed of the picked object properties.
---


#### Arguments


```bash
{Object} object - The source object.
{string | string[]} paths - The property path(s) to pick.
```


#### Returns


```bash
{Object} - Returns the new object.
```


#### Example


```ts
const object = { 'a': 1, 'b': '2', 'c': 3 };
pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

pick(object, 'a', 'c');
// => { 'a': 1, 'c': 3 }
```