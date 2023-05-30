---
title: defaults
definition: defaults(object, [sources])
description: Creates a new object with properties of multiple source objects merged together from left to right.
---


#### Arguments


```bash
{...Object} args - The source objects to merge.
```


#### Returns


```bash
{Object} - A new object with properties of multiple source objects merged together.
```


#### Example


```ts
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

_.defaults(obj1, obj2, obj3);
// => { a: 1, b: 2, c: 3 }

const obj4 = { a: 10, d: 4 };
const obj5 = { b: 20, a: 5 };

_.defaults(obj4, obj5);
// => { a: 5, d: 4, b: 20 }
```