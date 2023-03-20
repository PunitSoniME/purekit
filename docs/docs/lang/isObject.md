---
title: isObject
definition: 
description: Checks if a given value is an object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is an object, else `false`.
```


#### Example


```ts
isObject({}); // => true
isObject(null); // => false
isObject(42); // => false
```