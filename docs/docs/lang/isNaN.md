---
title: isNaN
definition: 
description: Determines whether a value is NaN (Not-A-Number).
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is NaN, else `false`.
```


#### Example


```ts
isNaN(NaN); // trueisNaN('string'); // trueisNaN(1); // false
```