---
title: isEqual
definition: isEmpty(value, other)
description: Determines whether the two given values are equal or not.
---


#### Arguments


```bash
{*} value - The first value to compare.
{*} other - The second value to compare.
```


#### Returns


```bash
{boolean} - `true` if the values are equal, `false` otherwise.
```


#### Example


```ts
_.isEqual(1, 1);
// => true

_.isEqual('hello', 'hello');
// => true

_.isEqual({ a: 1 }, { a: 1 });
// => true

_.isEqual([1, 2, 3], [1, 2, 3]);
// => true

_.isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]));
// => true

_.isEqual(new Map([['a', 1]]), new Map([['a', 1]]));
// => true

_.isEqual(null, undefined);
// => false

_.isEqual({ a: 1 }, { a: 2 });
// => false

_.isEqual([1, 2, 3], [1, 2]);
// => false

_.isEqual(new Set([1, 2, 3]), new Set([1, 2]));
// => false

_.isEqual(new Map([['a', 1]]), new Map([['b', 1]]));
// => false
```