---
title: isNaN
definition: isNaN(value)
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
_.isNaN(NaN);
// => true

_.isNaN('string');
// => true

_.isNaN(1);
// => false
```