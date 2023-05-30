---
title: isNative
definition: isNaN(value)
description: Checks if a value is a native function.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is a native function, else `false`.
```


#### Example


```ts
_.isNative(alert);
// => true

_.isNative(Math.max);
// => true

_.isNative(debounce);
// => false
```