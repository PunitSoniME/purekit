---
title: uniqWith
definition: 
description: Creates a duplicate-free version of an array, using a comparator function to compare the elements.
---


#### Arguments


```bash
{T[]} array - The array to inspect.
{predicateType<T>} [comparator=identity] - The function invoked per iteration to compare elements.
```


#### Returns


```bash

```


#### Example


```ts
const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
```