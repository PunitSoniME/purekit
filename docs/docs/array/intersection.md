---
title: intersection
definition: intersection([arrays])
description: Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.
---


#### Arguments


```bash
{...Array} array - The arrays to inspect.
```


#### Returns


```bash
{Array} - The array of common elements.
```


#### Example


```ts
intersection([1, 2, 3], [4, 3, 2]);
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange']);
// => ['apple', 'orange']
```