---
title: bifurcateBy
definition: bifurcateBy(array, predicate = identity)
description: Splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.
---

#### Arguments

```bash
{Array} array - The input array to be bifurcated.
{predicateType} [predicate = identity] - The predicate function used to determine the split.
```

#### Returns

```bash
{Array<Array>} - An array containing two arrays, the first one containing elements that satisfy the predicate, and the second one containing elements that do not.
```

#### Example

```ts
const array = [1, 2, 3, 4, 5];
const isEven = (num: number) => num % 2 === 0;
const result = bifurcateBy(array, isEven);
console.log(result);
// => [[2, 4], [1, 3, 5]]

const words = ['apple', 'banana', 'cherry', 'date'];
const startsWithB = (word: string) => word.startsWith('b');
const result = bifurcateBy(words, startsWithB);
console.log(result);
// => [['banana'], ['apple', 'cherry', 'date']]
```
