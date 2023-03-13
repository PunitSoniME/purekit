---
title: isArray
definition: 
description: Determines whether the given value is an array.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is an array, `false` otherwise.
```


#### Example


```ts
isArray([]); // returns trueisArray([1, 2, 3]); // returns trueisArray({}); // returns falseisArray(null); // returns false
```