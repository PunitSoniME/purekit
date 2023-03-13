---
title: pullAllWith
definition: 
description: Removes all given elements from the array using a custom comparator function.
---


#### Arguments


```bash
{T[]} array - The input array.
{T[]} elementsToRemove - The elements to be removed from the array.
{Function} comparator - The comparator function to be used for comparison.
```


#### Returns


```bash
{T[]} - The modified array.
```


#### Example


```ts
const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }, { id: 3, name: 'Peter' }];const result = pullAllWith(arr, [{ id: 1, name: 'John' }, { id: 3, name: 'Peter' }], (a, b) => a.id === b.id);console.log(result); // [{ id: 2, name: 'Mary' }]
```