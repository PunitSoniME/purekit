---
title: isNil
definition: isNil(value)
description: Checks if a value is null or undefined.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is null or undefined, else `false`.
```


#### Example


```ts
_.isNil(null);
// => true

_.isNil(undefined);
// => true

_.isNil(0);
// => false

_.isNil('');
// => false
```