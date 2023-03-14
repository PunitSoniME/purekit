---
title: isArrayLike
definition: 
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
isArrayLike('hello'); // returns trueisArrayLike([1, 2, 3]); // returns trueisArrayLike(document.querySelectorAll('.example')); // returns trueisArrayLike({}); // returns falseisArrayLike(null); // returns false
```