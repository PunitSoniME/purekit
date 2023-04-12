---
title: toFinite
definition: toFinite(value)
description: Converts value to a finite number.
---


#### Arguments


```bash
{*} value - The value to convert
```


#### Returns


```bash
{number} - Returns the converted number.
```


#### Example


```ts
toFinite(3.2);
// => 3.2
 
toFinite(Number.MIN_VALUE);
// => 5e-324
 
toFinite(Infinity);
// => 1.7976931348623157e+308
 
toFinite('3.2');
// => 3.2
```