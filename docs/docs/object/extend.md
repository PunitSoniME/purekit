---
title: extend
definition: extend(object, [sources])
description: Assigns own enumerable string keyed properties of source objects to the destination object.
---


#### Arguments


```bash
{Object} object - The destination object.
{...Object} sources - The source objects.
```


#### Returns


```bash
{Object} - The modified object.
```


#### Example


```ts
const object = { a: 1 };
const other = { b: 2 };

extend(object, other);
// => { 'a': 1, 'b': 2 }
```