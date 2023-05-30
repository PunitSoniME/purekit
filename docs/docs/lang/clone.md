---
title: clone
definition: clone(value)
description: Creates a shallow clone of the input value. If the value is an array, a new
---


#### Arguments


```bash
{*} value - The value to clone.
```


#### Returns


```bash
{*} - The cloned value.
```


#### Example


```ts
_.clone([1, 2, 3]);
// => [1, 2, 3]

_.clone({ x: 1, y: 2 });
// => { x: 1, y: 2 }

_.clone(new Map([['x', 1], ['y', 2]]));
// => a new map containing [['x', 1], ['y', 2]]

_.clone(new Set([1, 2, 3]));
// => a new set containing [1, 2, 3]

clone(new RegExp('ab+c', 'i'));
// => a new RegExp with the same pattern and flags.

_.clone(new Date());
// => a new date with the same value.
```