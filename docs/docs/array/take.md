---
title: take
definition: take(array, [n=1])
description: Creates a slice of the `array` with `n` elements taken from the beginning.
---


#### Arguments


```bash
{Array} array - The array to query.
{number} [n=1] - The number of elements to take.
```


#### Returns


```bash
{Array} - Returns the slice of `array`.
```


#### Example


```ts
const numbers = [1, 2, 3, 4, 5];
take(numbers, 3); // => [1, 2, 3]
take(numbers, 1); // => [1]
take(numbers);    // => [1]
```