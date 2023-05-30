---
title: toLength
definition: toLength(value)
description: Converts value to an integer suitable for use as the length of an array-like object.
---


#### Arguments


```bash
{any} value - The value to process.
```


#### Returns


```bash
{number} - Returns the converted integer.
```


#### Example


```ts
_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3
```