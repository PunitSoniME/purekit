---
title: isTypedArray
definition: isTypedArray(value)
description: Checks if a given value is a typed array.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a typed array, else `false`.
```


#### Example


```ts
isTypedArray(new Int32Array([1, 2, 3]));
// => true

isTypedArray([]);
// => false
```