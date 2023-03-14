---
title: map
definition: 
description: Creates an array or object of values by running each element in `collection` through `iteratee`.
---


#### Arguments


```bash
{Array<T> | Object} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
```


#### Returns


```bash
{T} - Returns the new mapped array or object.
```


#### Example


```ts
map([1, 2, 3], n => n * 2);
```