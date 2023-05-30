---
title: isArrayLikeObject
definition: isArrayLikeObject(value)
description: Determines whether the given value is an object that has a length property and is not a function.
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
_.isArrayLikeObject({ length: 0 });
// => true

_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject('hello');
// => true

_.isArrayLikeObject(document.querySelectorAll('.example'));
// => true

_.isArrayLikeObject(() => {});
// => false

_.isArrayLikeObject(null);
// => false
```