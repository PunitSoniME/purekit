---
title: isFinite
definition: isFinite(value)
description: Checks if a value is a finite number.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is a finite number, else `false`.
```


#### Example


```ts
_.isFinite(3);
// => true

_.isFinite(Number.POSITIVE_INFINITY);
// => false

_.isFinite('123');
// => false
```