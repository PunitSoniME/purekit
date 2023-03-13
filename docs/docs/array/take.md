---
title: take
definition: 
description: Creates a slice of the `array` with `n` elements taken from the beginning.
---


#### Arguments


```bash
{T[]} array - The array to query.
{number} [n=1] - The number of elements to take.
```


#### Returns


```bash
{T[]} - Returns the slice of `array`.
```


#### Example


```ts
const numbers = [1, 2, 3, 4, 5];take(numbers, 3); // => [1, 2, 3]take(numbers, 1); // => [1]take(numbers);    // => [1]
```