---
title: gt
definition: 
description: Checks if `value` is greater than `other`.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is greater than `other`, else `false`.
```


#### Example


```ts
gt(3, 1); // => truegt(1, 3); // => false
```