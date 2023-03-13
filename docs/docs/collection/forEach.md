---
title: forEach
definition: 
description: Applies a function to each element in a collection.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function to apply to each element.
```


#### Returns


```bash

```


#### Example


```ts
const arr = [1, 2, 3];forEach(arr, n => console.log(n)); // logs 1, 2, 3const obj = { a: 1, b: 2, c: 3 };forEach(obj, (value, key) => console.log(key, value)); // logs "a 1", "b 2", "c 3"
```