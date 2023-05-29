---
title: flatten
definition: flatten(array)
description: Flattens an array of nested arrays into a single flat array.
---


#### Arguments


```bash
{Array} array - The array to flatten.
```


#### Returns


```bash
{Array} - Returns the new flattened array.
```


#### Example


```ts
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

_.flatten(['a', ['b', ['c']]]);
// => ['a', 'b', 'c']
```