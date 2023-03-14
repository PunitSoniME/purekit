---
title: zipObject
definition: 
description: Creates an object from arrays of property names and values, where property names become object keys and values become object values.
---


#### Arguments


```bash
{Array} [props=[]] - An array of property names.
{Array} [values=[]] - An array of values.
```


#### Returns


```bash
{Object} - The new object.
```


#### Example


```ts
zipObject(['a', 'b'], [1, 2]) // {a: 1, b: 2}zipObject(['a', 'b'], [1]) // {a: 1, b: undefined}
```