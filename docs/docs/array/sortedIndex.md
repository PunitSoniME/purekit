---
title: sortedIndex
definition: 
description: Returns the index at which the specified value should be inserted into the
---


#### Arguments


```bash
{Array} array - The sorted array to search in.
{T} value - The value to search for.
```


#### Returns


```bash
{number} - The index at which the specified value should be inserted.
```


#### Example


```ts
sortedIndex([10, 20, 30, 40], 35); // Returns 3
```