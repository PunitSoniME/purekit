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
isFinite(3);
// => true

isFinite(Number.POSITIVE_INFINITY);
// => false

isFinite('123');
// => false
```