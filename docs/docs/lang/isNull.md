---
title: isNull
definition: 
description: Checks if a value is `null`.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is `null`, else `false`.
```


#### Example


```ts
isNull(null); // trueisNull(undefined); // falseisNull(''); // false
```