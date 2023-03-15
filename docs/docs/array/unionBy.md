---
title: unionBy
definition: unionBy([arrays], [iteratee = identity])
description: Creates an array of unique values, in order, by iterating over all elements of all the given arrays, and returning the unique elements by using an iteratee function to extract a value for comparison.
---


#### Arguments


```bash
{Array} ...array - The array to inspect.
{string | Function} [iteratee = identity] - The iteratee invoked per element.
```


#### Returns


```bash
{Array} - Returns the new array of combined values.
```


#### Example


```ts
unionBy([2.1], [1.2, 2.3], Math.floor); //  =>  [2.1, 1.2]
```