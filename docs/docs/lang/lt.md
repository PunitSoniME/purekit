---
title: lt
definition: lt(value, other)
description: Checks if `value` is less than `other`.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is less than `other`, else `false`.
```


#### Example


```ts
_.lt(1, 3);
// => true

_.lt(3, 1);
// => false

_.lt('a', 'z');
// => true
```