---
title: union
definition: union([arrays])
description: Creates an array of unique values, in order, from all given arrays using Set.
---


#### Arguments


```bash
{Array} ...array - The first array.
```


#### Returns


```bash
{Array} - The new array of combined unique values.
```


#### Example


```ts
_.union([2], [1, 2]);
// => [2, 1]
```