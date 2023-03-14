---
title: takeWhile
definition: 
description: Creates a new array containing the elements of the input array, up until the predicate returns false.
---


#### Arguments


```bash
{Array} array - The input array.
{Function} [predicate = identity] - The predicate function to be called on each element.
```


#### Returns


```bash
{Array} - The new array of elements that passed the predicate, until the first that returned false.
```


#### Example


```ts
takeWhile([1, 2, 3, 4], n => n < 3);
```