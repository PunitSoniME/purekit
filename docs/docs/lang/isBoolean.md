---
title: isBoolean
definition: isBoolean(value)
description: Determines whether the given value is a boolean.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a boolean, `false` otherwise.
```


#### Example


```ts
isBoolean(true);
// => true

isBoolean(false);
// => true

isBoolean(0);
// => false

isBoolean('true');
// => false

isBoolean(null);
// => false
```