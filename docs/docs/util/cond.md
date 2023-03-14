---
title: cond
definition: 
description: Creates a function that iterates over pairs of predicates and functions, returning the result of the first function that returns truthy for the corresponding predicate.
---


#### Arguments


```bash
{Array<Array>} pairs - The predicate-function pairs.
```


#### Returns


```bash

```


#### Example


```ts
const func = cond([  [x => x > 5, x => 'greater than 5'],  [x => x === 5, x => 'equals 5'],  [x => x < 5, x => 'less than 5']]);
```