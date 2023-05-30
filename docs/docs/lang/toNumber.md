---
title: toNumber
definition: toNumber(value)
description: Converts a value to a number.
---


#### Arguments


```bash
{*} value - The value to convert to a number.
```


#### Returns


```bash
{number} - The converted number.
```


#### Example


```ts
_.toNumber('123');
// => 123

_.toNumber('abc');
// => NaN

_.toNumber(null);
// => 0

_.toNumber(undefined);
// => NaN

_.toNumber({});
// => NaN
```