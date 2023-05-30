---
title: assignWith
definition: assignWith(object, sources, [customizer])
description: Assigns the enumerable own and inherited properties of one or more source objects to a target object.
---


#### Arguments


```bash
{Object} object - The target object to assign the properties to.
{...Object} args - The source objects containing the properties to assign.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash
{Object} - The modified target object.
```


#### Example


```ts
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

_.assignWith(target, source1, source2, (objValue, srcValue) => objValue === undefined ? srcValue : objValue);
// => { a: 1, b: 2, c: 3 }
```