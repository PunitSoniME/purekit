---
title: pullAllWith
definition: pullAllWith(array, values, [comparator])
description: Removes all given elements from the array using a custom comparator function.
---


#### Arguments


```bash
{Array} array - The input array.
{Array} elementsToRemove - The elements to be removed from the array.
{Function} comparator - The comparator function to be used for comparison.
```


#### Returns


```bash
{Array} - The modified array.
```


#### Example


```ts
const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }, { id: 3, name: 'Peter' }];

_.pullAllWith(arr, [{ id: 1, name: 'John' }, { id: 3, name: 'Peter' }], (a, b) => a.id === b.id);
// => [{ id: 2, name: 'Mary' }]
```