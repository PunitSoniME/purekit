---
title: isArrayLike
definition: isArrayLike(value)
description: Determines whether the given value is an array-like object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is an array-like object, `false` otherwise.
```


#### Example


```ts
_.isArrayLike('hello');
// => true

_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(document.querySelectorAll('.example'));
// => true

_.isArrayLike({});
// => false

_.isArrayLike(null);
// => false
```