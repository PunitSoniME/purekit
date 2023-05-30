---
title: isObjectLike
definition: isObjectLike(value)
description: Checks if `value` is object-like.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is object-like, else `false`.
```


#### Example


```ts
_.isObjectLike({});
// => true

_.isObjectLike([1, 2, 3]);
// => true

_.isObjectLike(Function);
// => false

_.isObjectLike(null);
// => false
```