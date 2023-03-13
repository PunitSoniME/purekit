---
title: unzip
definition: 
description: This function takes an array of arrays and groups the elements of the inner arrays by their index
---


#### Arguments


```bash
{Array.<Array>} array - The array of arrays to unzip
```


#### Returns


```bash
{Array.<Array>} - A new array of arrays containing the grouped elements
```


#### Example


```ts
unzip([[1, 'a'], [2, 'b'], [3, 'c']]); // [[1, 2, 3], ['a', 'b', 'c']]
```