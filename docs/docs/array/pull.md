---
title: pull
definition: pull(array, [elementsToRemove])
description: Removes all occurrences of specified values from an array.
---


#### Arguments


```bash
{Array} array - The array to modify.
{...*} elementsToRemove - The values to remove.
```


#### Returns


```bash
{Array} - The modified array with values removed.
```


#### Example


```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
const result = pull(arr, 'a', 'c');

console.log(result);
// => ['b', 'b']
```