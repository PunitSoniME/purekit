---
title: xorBy
definition: 
description: Creates an array of unique values that are included in exactly one of the given arrays
---


#### Arguments


```bash
{T[]} array - The array to inspect.
{...any} args - The arrays to inspect.
{predicateType<T>} [iteratee=identity] - The iteratee invoked per element.
```


#### Returns


```bash
{T[]} - Returns the new array of filtered values.
```


#### Example


```ts
const arr1 = [1, 2, 3, 4];
```