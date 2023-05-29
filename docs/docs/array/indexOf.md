---
title: indexOf
definition: indexOf(array, value, [fromIndex = 0])
description: Returns the index of the first occurrence of a value in an array, or -1 if not found.
---


#### Arguments


```bash
{Array} array - The input array to search.
{*} value - The value to search for.
{number} [startIndex = 0] - The index to start the search from.
```


#### Returns


```bash
{number} - The index of the first occurrence of the value, or -1 if not found.
```


#### Example


```ts
const fruits = ['apple', 'banana', 'mango', 'orange'];
const index1 = _.indexOf(fruits, 'banana');
// => 1

const index2 = _.indexOf(fruits, 'papaya');
// => -1
```