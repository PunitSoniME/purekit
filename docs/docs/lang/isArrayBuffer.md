---
title: isArrayBuffer
definition: isArrayBuffer(value)
description: Determines whether the given value is an `ArrayBuffer` object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is an `ArrayBuffer` object, `false` otherwise.
```


#### Example


```ts
const buffer = new ArrayBuffer(16);
isArrayBuffer(buffer);
// => true

const arr = [1, 2, 3];
isArrayBuffer(arr);
// => false
```