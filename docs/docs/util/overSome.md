---
title: overSome
definition: overSome([predicates = [identity]])
description: Checks if the given item satisfies at least one predicate function from the given array
---


#### Arguments


```bash
{Function[]} predicates - An array of predicate functions to check the item against
```


#### Returns


```bash
{Function} - A function that returns true if the item satisfies at least one predicate, false otherwise
```


#### Example


```ts
const isString = val => typeof val === 'string';
const isNumber = val => typeof val === 'number';
const isTruthy = val => !!val;
const check = _.overSome([isString, isNumber, isTruthy]);
check('hello');
// => true

check(42);
// => true

check(false);
// => true

check(undefined);
// => false
```