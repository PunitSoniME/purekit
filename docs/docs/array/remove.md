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
const arr = [1, 2, 3, 4, 5];const removed = remove(arr, n => n % 2 === 0);console.log(arr); // [1, 3, 5]console.log(removed); // [2, 4]
```