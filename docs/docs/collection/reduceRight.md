---
title: reduceRight
definition: reduceRight(collection, [iteratee = identity], [accumulator])
description: This method is like `reduce`, except that it iterates over elements of a collection from right to left.
---


#### Arguments


```bash
{Array} collection - The collection to iterate over.
{Function} iteratee - The function invoked per iteration.
{*} initialValue - The initial value.
```


#### Returns


```bash
{*} - Returns the accumulated value.
```


#### Example


```ts
const numbers = [1, 2, 3, 4, 5];

const sum = reduceRight(numbers, (accumulator, value) => accumulator + value, 0);
// => 15

const product = reduceRight(numbers, (accumulator, value) => accumulator * value, 1);
// => 120
```