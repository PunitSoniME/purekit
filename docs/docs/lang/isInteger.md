---
title: isInteger
definition: isInteger(value)
description: Checks if a value is an integer.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Whether or not the value is an integer.
```


#### Example


```ts
_.isInteger(5);
// => true

_.isInteger('5');
// => false

_.isInteger(5.1);
// => false
```