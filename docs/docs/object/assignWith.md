---
title: assignWith
definition: 
description: Assigns the enumerable own and inherited properties of one or more source objects to a target object.
---


#### Arguments


```bash
{T} object - The target object to assign the properties to.
{...any} args - The source objects containing the properties to assign.
```


#### Returns


```bash
{T} - The modified target object.
```


#### Example


```ts
const target = { a: 1 };const source1 = { b: 2 };const source2 = { c: 3 };const result = assignWith(target, source1, source2, (objValue, srcValue) => objValue === undefined ? srcValue : objValue);console.log(result); // { a: 1, b: 2, c: 3 }
```