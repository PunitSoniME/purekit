---
title: overSome
definition: 
description: Checks if the given item satisfies at least one predicate function from the given array
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const isString = val => typeof val === 'string';const isNumber = val => typeof val === 'number';const isTruthy = val => !!val;const check = overSome([isString, isNumber, isTruthy]);check('hello'); // truecheck(42); // truecheck(false); // truecheck(undefined); // false
```