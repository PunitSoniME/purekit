---
title: isFunction
definition: isFunction(value)
description: Checks if a value is a function.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a function, else `false`.
```


#### Example


```ts
isFunction(function() {});
// => true

isFunction(() => {});
// => true

isFunction(1);
// => false
```