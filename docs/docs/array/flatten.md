---
title: flatten
definition: 
description: Flattens an array of nested arrays into a single flat array.
---


#### Arguments


```bash
{T[]} array - The array to flatten.
```


#### Returns


```bash
{any[]} - Returns the new flattened array.
```


#### Example


```ts
flatten([1, [2, [3, [4]], 5]]); // Returns: [1, 2, 3, 4, 5]flatten(['a', ['b', ['c']]]); // Returns: ['a', 'b', 'c']
```