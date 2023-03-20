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
isArrayLikeObject({ length: 0 });
// => true

isArrayLikeObject([1, 2, 3]);
// => true

isArrayLikeObject('hello');
// => true

isArrayLikeObject(document.querySelectorAll('.example'));
// => true

isArrayLikeObject(() => {});
// => false

isArrayLikeObject(null);
// => false
```