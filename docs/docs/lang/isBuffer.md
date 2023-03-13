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
const buf = Buffer.from('hello', 'utf8');
```