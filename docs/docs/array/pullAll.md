---
title: pullAll
definition: pullAll(array, values)
description: Removes all instances of specified elements from an array.
---


#### Arguments


```bash
{Array} array - The array to modify.
{Array} elementsToRemove - The elements to remove from the array.
```


#### Returns


```bash
{Array} - The modified array with specified elements removed.
```


#### Example


```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pullAll(arr, ['a', 'c']);
// => ['b', 'b']
```