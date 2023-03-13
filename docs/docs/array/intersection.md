---
title: intersection
definition: 
description: Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.
---


#### Arguments


```bash
{...Array<T>} array - The arrays to inspect.
```


#### Returns


```bash
{Array<T>} - The array of common elements.
```


#### Example


```ts
intersection([1, 2, 3], [4, 3, 2])
```