---
title: isSafeInteger
definition: 
description: Checks if a value is a safe integer, which is a number between -(2^53 - 1) and 2^53 - 1.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a safe integer, else `false`.
```


#### Example


```ts
isSafeInteger(42);
```