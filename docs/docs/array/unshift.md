---
title: unshift
definition: unshift(array, [elements])
description: Adds one or more elements to the beginning of an array and returns the new length of the array.
---


#### Arguments


```bash
{Array} array - The array to add elements to.
{any | []} ...elements - The elements to add to the beginning of the array.
```


#### Returns


```bash
{Array} - The modified array with new elements added to the beginning.
```


#### Example


```ts
unshift([1, 2, 3], 4); // => [4, 1, 2, 3]

unshift(['a', 'b'], 'c', 'd'); // => ['c', 'd', 'a', 'b']
```