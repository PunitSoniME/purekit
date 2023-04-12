---
title: toInteger
definition: toInteger(value)
description: Converts a value to an integer.
---


#### Arguments


```bash
{*} value - The value to convert.
```


#### Returns


```bash
{number} - The converted integer.
```


#### Example


```ts
toInteger(3.2);
// => 3
 
toInteger(Number.MIN_VALUE);
// => 0
 
toInteger(Infinity);
// => 1.7976931348623157e+308
 
toInteger('3.2');
// => 3
```