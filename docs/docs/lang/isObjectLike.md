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
isObjectLike({});
// => true

isObjectLike([1, 2, 3]);
// => true

isObjectLike(Function);
// => false

isObjectLike(null);
// => false
```