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
toLength(3.2);
// => 3
 
toLength(Number.MIN_VALUE);
// => 0
 
toLength(Infinity);
// => 4294967295
 
toLength('3.2');
// => 3
```