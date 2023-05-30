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
_.isUndefined(undefined);
// => true

_.isUndefined(null);
// => false

_.isUndefined(0);
// => false

_.isUndefined('');
// => false

_.isUndefined(false);
// => false
```