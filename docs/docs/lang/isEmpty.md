---
title: isEmpty
definition: 
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
isEmpty(null); // returns trueisEmpty(undefined); // returns trueisEmpty(0); // returns trueisEmpty(''); // returns trueisEmpty([]); // returns trueisEmpty({}); // returns trueisEmpty(new Set()); // returns trueisEmpty(new Map()); // returns trueisEmpty({ a: 1 }); // returns falseisEmpty('hello'); // returns falseisEmpty([1, 2, 3]); // returns falseisEmpty(new Set([1, 2, 3])); // returns falseisEmpty(new Map([['a', 1]])); // returns false
```