---
title: pull
definition: 
description: Removes all occurrences of specified values from an array.
---


#### Arguments


```bash
{T[]} array - The array to modify.
{...T} elementsToRemove - The values to remove.
```


#### Returns


```bash
{T[]} - The modified array with values removed.
```


#### Example


```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];const result = pull(arr, 'a', 'c');console.log(result); // Output: ['b', 'b']
```