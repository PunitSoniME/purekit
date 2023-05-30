---
title: isEmpty
definition: isEmpty(value)
description: Determines whether the given value is empty or not.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is empty, `false` otherwise.
```


#### Example


```ts
_.isEmpty(null);
// => true

_.isEmpty(undefined);
// => true

_.isEmpty(0);
// => true

_.isEmpty('');
// => true

_.isEmpty([]);
// => true

_.isEmpty({});
// => true

_.isEmpty(new Set());
// => true

_.isEmpty(new Map());
// => true

_.isEmpty({ a: 1 });
// => false

_.isEmpty('hello');
// => false

_.isEmpty([1, 2, 3]);
// => false

_.isEmpty(new Set([1, 2, 3]));
// => false

_.isEmpty(new Map([['a', 1]]));
// => false
```