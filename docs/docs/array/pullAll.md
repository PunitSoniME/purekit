---
title: pullAll
definition: 
description: Removes all instances of specified elements from an array.
---


#### Arguments


```bash
{T[]} array - The array to modify.
{T[]} elementsToRemove - The elements to remove from the array.
```


#### Returns


```bash

```


#### Example


```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];pullAll(arr, ['a', 'c']);console.log(arr);
```