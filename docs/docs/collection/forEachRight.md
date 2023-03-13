---
title: forEachRight
definition: 
description: Applies an iteratee function to each element of an array-like object, starting from the end of the collection.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
```


#### Returns


```bash

```


#### Example


```ts
const arr = [1, 2, 3];forEachRight(arr, (value, index) => {  console.log(`Value: ${value} Index: ${index}`);});
```