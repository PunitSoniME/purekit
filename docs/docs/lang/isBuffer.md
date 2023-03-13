---
title: isBuffer
definition: 
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
const buf = Buffer.from('hello', 'utf8');isBuffer(buf); // returns trueconst arr = [1, 2, 3];isBuffer(arr); // returns false
```