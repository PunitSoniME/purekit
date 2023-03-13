---
title: filter
definition: 
description: Filters the elements of a collection based on the truth value of a provided function.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{predicateType<T>} [iteratee=identity] - The function invoked per iteration.
```


#### Returns


```bash
{T} - The new filtered collection.
```


#### Example


```ts
const nums = [1, 2, 3, 4, 5];
```