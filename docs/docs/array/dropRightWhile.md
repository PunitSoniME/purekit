---
title: dropRightWhile
definition: 
description: Creates a slice of the `array` with elements dropped from the end.
---


#### Arguments


```bash
{T[]} array - The array to inspect.
{predicateType<T>} [predicate=identity] - The function invoked per iteration.
```


#### Returns


```bash
{T[]} - Returns the slice of `array`.
```


#### Example


```ts
dropRightWhile([1, 2, 3, 4], n => n > 2);
```