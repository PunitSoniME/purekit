---
title: isNil
definition: 
description: Checks if a value is null or undefined.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is null or undefined, else `false`.
```


#### Example


```ts
isNil(null); // trueisNil(undefined); // trueisNil(0); // falseisNil(''); // false
```