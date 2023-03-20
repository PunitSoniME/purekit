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
toNumber('123');
// => 123

toNumber('abc');
// => NaN

toNumber(null);
// => 0

toNumber(undefined);
// => NaN

toNumber({});
// => NaN
```