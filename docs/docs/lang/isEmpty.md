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
isEmpty(null);
// => true

isEmpty(undefined);
// => true

isEmpty(0);
// => true

isEmpty('');
// => true

isEmpty([]);
// => true

isEmpty({});
// => true

isEmpty(new Set());
// => true

isEmpty(new Map());
// => true

isEmpty({ a: 1 });
// => false

isEmpty('hello');
// => false

isEmpty([1, 2, 3]);
// => false

isEmpty(new Set([1, 2, 3]));
// => false

isEmpty(new Map([['a', 1]]));
// => false
```