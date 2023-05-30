---
title: isNumber
definition: isNumber(value)
description: Checks if a value is a number.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - True if the value is a number, false otherwise.
```


#### Example


```ts
_.isNumber(42);
// => true

_.isNumber(NaN);
// => true

_.isNumber('42');
// => false

_.isNumber(null);
// => false
```