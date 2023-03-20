---
title: isUndefined
definition: isUndefined(value)
description: Checks if a value is undefined.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is undefined, else `false`.
```


#### Example


```ts
isUndefined(undefined);
// => true

isUndefined(null);
// => false

isUndefined(0);
// => false

isUndefined('');
// => false

isUndefined(false);
// => false
```