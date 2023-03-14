---
title: isArrayLikeObject
definition: 
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
isArrayLikeObject({ length: 0 }); // returns trueisArrayLikeObject([1, 2, 3]); // returns trueisArrayLikeObject('hello'); // returns trueisArrayLikeObject(document.querySelectorAll('.example')); // returns trueisArrayLikeObject(() => {}); // returns falseisArrayLikeObject(null); // returns false
```