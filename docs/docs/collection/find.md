---
title: find
definition: 
description: Finds the first element in the given collection that satisfies the provided predicate.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{Function} [iteratee=identity] - The function invoked per iteration.
{number} [fromIndex=0] - The index to start searching from.
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
find(users, o => o.age < 40);
```