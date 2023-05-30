---
title: isString
definition: isString(value)
description: Checks if a value is a string.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is a string, else `false`.
```


#### Example


```ts
_.isString('hello');
// => true

_.isString(123);
// => false
```