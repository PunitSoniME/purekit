---
title: drop
definition: 
description: Creates a slice of `array` with `n` elements dropped from the beginning.
---


#### Arguments


```bash
{T[]} array - The array to query.
{number} [n=1] - The number of elements to drop.
```


#### Returns


```bash
{T[]} - Returns the slice of `array`.
```


#### Example


```ts
drop([1, 2, 3, 4]); // returns [2, 3, 4]drop([1, 2, 3, 4], 2); // returns [3, 4]
```