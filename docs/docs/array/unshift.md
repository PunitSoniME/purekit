---
title: unshift
definition: 
description: Adds one or more elements to the beginning of an array and returns the new length of the array.
---


#### Arguments


```bash
{T[]} array - The array to add elements to.
{...T[]} elements - The elements to add to the beginning of the array.
```


#### Returns


```bash
{T[]} - The modified array with new elements added to the beginning.
```


#### Example


```ts
unshift([1, 2, 3], 4); // Returns [4, 1, 2, 3]unshift(['a', 'b'], 'c', 'd'); // Returns ['c', 'd', 'a', 'b']
```