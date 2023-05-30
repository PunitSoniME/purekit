---
title: isSafeInteger
definition: isSafeInteger(value)
description: Checks if a value is a safe integer, which is a number between -(2^53 - 1) and 2^53 - 1.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a safe integer, else `false`.
```


#### Example


```ts
_.isSafeInteger(42);
// => true

_.isSafeInteger(Number.MAX_SAFE_INTEGER);
// => true

_.isSafeInteger(Number.MIN_SAFE_INTEGER);
// => true

_.isSafeInteger('42');
// => false

_.isSafeInteger(3.14);
// => false

_.isSafeInteger(Number.POSITIVE_INFINITY);
// => false
```