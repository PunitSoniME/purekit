---
title: cond
definition: cond(pairs)
description: Creates a function that iterates over pairs of predicates and functions, returning the result of the first function that returns truthy for the corresponding predicate.
---


#### Arguments


```bash
{Array} pairs - The predicate-function pairs.
```


#### Returns


```bash
{Function} - The new function.
```


#### Example


```ts
const func = _.cond([
  [x => x > 5, x => 'greater than 5'],
  [x => x === 5, x => 'equals 5'],
  [x => x < 5, x => 'less than 5']
]);

func(10);
// => 'greater than 5'

func(5);
// => 'equals 5'
func(2);
// => 'less than 5'
```