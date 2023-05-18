---
title: bifurcate
definition: bifurcate(array, filter)
description: Splits values into two groups and then puts a truthy element of filterin the first group, and in the second group otherwise.
---

#### Arguments

```bash
{Array} array - The input array to be bifurcated.
{Array<boolean>} filter - The filter array used to determine the split.
```

#### Returns

```bash
{Array<Array>} - An array containing two arrays, the first one containing elements that correspond to `true` values in the filter, and the second one containing elements that correspond to `false` values.
```

#### Example

```ts
const array = [1, 2, 3, 4, 5];
const filter = [true, false, true, false, true];
const result = bifurcate(array, filter);
console.log(result);
// => [[1, 3, 5], [2, 4]]

const words = ['apple', 'banana', 'cherry', 'date'];
const filter = [false, true, true, false];
const result = bifurcate(words, filter);
console.log(result);
// => [['banana', 'cherry'], ['apple', 'date']]
```
