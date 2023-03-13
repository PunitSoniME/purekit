---
title: sortedLastIndex
definition: 
description: This method is like `sortedIndex` except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
---


#### Arguments


```bash
{Array} array - The sorted array to inspect.
{*} value - The value to evaluate.
```


#### Returns


```bash
{number} - Returns the index at which value should be inserted into array.
```


#### Example


```ts
sortedLastIndex([4, 5, 5, 5, 6], 5);	// => 4
```