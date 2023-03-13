---
title: remove
definition: 
description: Removes all elements from an array that satisfy the predicate and returns an array with the removed elements.
---


#### Arguments


```bash
{T[]} array - The array to modify.
{Function} [predicate=identity] - The function invoked per iteration.
```


#### Returns


```bash
{T[]} - An array of removed elements.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
```