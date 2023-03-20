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
isNumber(42);
// => true

isNumber(NaN);
// => true

isNumber('42');
// => false

isNumber(null);
// => false
```