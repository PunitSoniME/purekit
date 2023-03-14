---
title: clone
definition: 
description: Creates a shallow clone of the input value. If the value is an array, a new
---


#### Arguments


```bash
{T} value - The value to clone.
```


#### Returns


```bash
{T} - The cloned value.
```


#### Example


```ts
clone([1, 2, 3]); // Returns [1, 2, 3]clone({ x: 1, y: 2 }); // Returns { x: 1, y: 2 }clone(new Map([['x', 1], ['y', 2]])); // Returns a new map containing [['x', 1], ['y', 2]]clone(new Set([1, 2, 3])); // Returns a new set containing [1, 2, 3]clone(new RegExp('ab+c', 'i')); // Returns a new RegExp with the same pattern and flags.clone(new Date()); // Returns a new date with the same value.
```