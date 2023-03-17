---
title: filter
definition: filter(collection, iteratee = identity)
description: Filters the elements of a collection based on the truth value of a provided function.
---

#### Arguments

```bash
{[]} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```

#### Returns

```bash
{[]} - The new filtered collection.
```

#### Example

```ts
const nums = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;

filter(nums, isEven); //  =>   [2, 4]
```