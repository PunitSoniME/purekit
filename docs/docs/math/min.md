---
title: min
definition: min(array)
description: Returns the minimum value in an array of numbers.
---


#### Arguments


```bash
{number[]} collection - The array of numbers to search for the minimum value.
```


#### Returns


```bash
{number | undefined} - The minimum value in the array, or undefined if the array is empty.
```


#### Example


```ts
_.min([1, 2, 3]);
// => 1

_.min([]);
// => undefined
```