---
title: isBuffer
definition: isBuffer(value)
description: Determines whether the given value is a Node.js Buffer object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a Node.js Buffer object, `false` otherwise.
```


#### Example


```ts
const buf = Buffer.from('hello', 'utf8');
_.isBuffer(buf); // => true

const arr = [1, 2, 3];
_.isBuffer(arr); // => false
```