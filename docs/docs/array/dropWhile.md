---
title: dropWhile
definition: 
description: Creates a new array with elements dropped until the predicate returns false.
---


#### Arguments


```bash
{T[]} array - The input array.
{predicateType<T>} [predicate=identity] - The function invoked per iteration.
```


#### Returns


```bash

```


#### Example


```ts
dropWhile([1, 2, 3], n => n < 3); // Returns [3]
```