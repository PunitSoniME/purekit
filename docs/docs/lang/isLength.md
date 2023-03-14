---
title: isLength
definition: 
description: Checks if a value is a valid array-like length.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a valid length, else `false`.
```


#### Example


```ts
isLength(3); // => trueisLength(Number.MIN_VALUE); // => falseisLength(Infinity); // => falseisLength('3'); // => false
```