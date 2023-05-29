---
title: countBy
definition: countBy(collection, predicate = identity)
description: Groups the elements in the array by a given criterion, and counts the number of elements in each group.
---

#### Arguments

```bash
{Array} collection - The array to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```

#### Returns

```bash
{Object} - An object with keys representing the group and values representing the count of elements in that group.
```

#### Example

```ts
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }

_.countBy(['one', 'two', 'three'], word => word[0]);
// => { o: 2, t: 1 }
```