---
title: lte
definition: lte(value, other)
description: Checks if `value` is less than or equal to `other`.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is less than or equal to `other`, else `false`.
```


#### Example


```ts
_.lte(1, 2);
// => true

_.lte(2, 1);
// => false

_.lte(2, 2);
// => true
```