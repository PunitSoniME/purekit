---
title: lastIndexOf
definition: lastIndexOf(array, value, [fromIndex = array.length - 1])
description: Returns the index of the last occurrence of the specified element in the array, searching backwards from the given index.
---


#### Arguments


```bash
{Array} array - The input array to search in.
{*} element - The element to search for.
{number} [fromIndex = array.length - 1] - The index to start the search from.
```


#### Returns


```bash
{number} - The index of the last occurrence of the element in the array, or -1 if not found.
```


#### Example


```ts
const fruits = ['apple', 'banana', 'orange', 'banana', 'orange'];
const lastIndex1 = lastIndexOf(fruits, 'banana'); // returns 3
const lastIndex2 = lastIndexOf(fruits, 'orange', 2); // returns 2
```