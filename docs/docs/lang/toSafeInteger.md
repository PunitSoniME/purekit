---
title: toSafeInteger
definition: toSafeInteger(value)
description: Converts a value to a safe integer. Returns a safe integer that is at least -9007199254740991 and at most 9007199254740991.
---


#### Arguments


```bash
{*} value - The value to convert.
```


#### Returns


```bash
{number} - Returns the converted safe integer.
```


#### Example


```ts
toSafeInteger(3.2);
// => 3

toSafeInteger(Infinity);
// => 9007199254740991

toSafeInteger('3.2');
// => 3

toSafeInteger(Number.MIN_VALUE);
// => 0
```