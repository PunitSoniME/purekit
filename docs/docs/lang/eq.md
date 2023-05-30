---
title: eq
definition: eq(value, other)
description: Checks if two values are equivalent, based on the `Object.is` method.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if the values are equivalent, else `false`.
```


#### Example


```ts
_.eq(NaN, NaN);
// => true

_.eq(1, 1);
// => true

_.eq(1, '1');
// => false

_.eq({}, {});
// => false

_.eq([], []);
// => false
```