---
title: isRegExp
definition: 
description: Checks if a given value is a regular expression.
---


#### Arguments


```bash
{any} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is a regular expression, else `false`.
```


#### Example


```ts
isRegExp(/ab+c/i); // => true
```