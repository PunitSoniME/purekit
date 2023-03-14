---
title: filter
definition: 
description: Filters the elements of a collection based on the truth value of a provided function.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
```


#### Returns


```bash
{T} - The new filtered collection.
```


#### Example


```ts
const nums = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const filteredNums = filter(nums, isEven); // [2, 4]
```