---
title: isLength
definition: isLength(value)
description: Checks if a value is a valid array-like length.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a valid length, else `false`.
```


#### Example


```ts
_.isLength(3);
// => true

_.isLength(Number.MIN_VALUE);
// => false

_.isLength(Infinity);
// => false

_.isLength('3');
// => false
```