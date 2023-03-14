---
title: lt
definition: 
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
lt(1, 3); // => truelt(3, 1); // => falselt('a', 'z'); // => true
```