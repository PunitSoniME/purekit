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
isEqual(1, 1);
// => true

isEqual('hello', 'hello');
// => true

isEqual({ a: 1 }, { a: 1 });
// => true

isEqual([1, 2, 3], [1, 2, 3]);
// => true

isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]));
// => true

isEqual(new Map([['a', 1]]), new Map([['a', 1]]));
// => true

isEqual(null, undefined);
// => false

isEqual({ a: 1 }, { a: 2 });
// => false

isEqual([1, 2, 3], [1, 2]);
// => false

isEqual(new Set([1, 2, 3]), new Set([1, 2]));
// => false

isEqual(new Map([['a', 1]]), new Map([['b', 1]]));
// => false
```