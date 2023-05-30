---
title: invert
definition: invert(object)
description: Inverts the keys and values of an object. If multiple keys have the same value,
---


#### Arguments


```bash
{Object} object - The object to invert.
```


#### Returns


```bash
{Object} - The new object with inverted keys and values.
```


#### Example


```ts
const object = { a: 1, b: 2, c: 1 };
_.invert(object);
// => { '1': 'c', '2': 'b' }

const object = { a: 'x', b: 'y', c: 'z' };
_.invert(object);
// => { 'x': 'a', 'y': 'b', 'z': 'c' }
```