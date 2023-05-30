---
title: gte
definition: gte(value, other)
description: Checks if `value` is greater than or equal to `other`.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is greater than or equal to `other`, else `false`.
```


#### Example


```ts
_.gte(3, 1);
// => true

_.gte(1, 3);
// => false

_.gte(2, 2);
// => true
```