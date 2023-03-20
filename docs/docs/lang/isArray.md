---
title: isArray
definition: isArray(value)
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
isArray([]);
// => true

isArray([1, 2, 3]);
// => true

isArray({}); 
// => false

isArray(null); 
// => false
```