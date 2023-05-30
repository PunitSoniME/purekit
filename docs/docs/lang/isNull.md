---
title: isNull
definition: isNull(value)
description: Checks if a value is `null`.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is `null`, else `false`.
```


#### Example


```ts
_.isNull(null);
// => true

_.isNull(undefined);
// => false

_.isNull('');
// => false
```