---
title: find
definition: find(collection, iteratee = identity, [fromIndex = 0])
description: Finds the first element in the given collection that satisfies the provided predicate.
---


#### Arguments


```bash
{Array} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
{number} [fromIndex = 0] - The index to start searching from.
```


#### Returns


```bash
{Object} - Returns the found element, else undefined.
```


#### Example

```ts
const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

_.find(users, o => o.age < 40);
// => { 'user': 'barney', 'age': 36, 'active': true }

_.find(users, { 'age': 1, 'active': true });
// => { 'user': 'pebbles', 'age': 1, 'active': true }

_.find(users, 'active');
// => { 'user': 'barney', 'age': 36, 'active': true }
```