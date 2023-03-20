---
title: some
definition: some(collection, [predicate = identity])
description: Checks if `predicate` returns truthy for any element of `collection`.
---


#### Arguments


```bash
{Array | Object} collection - The collection to iterate over.
{Function} [iteratee = identity] - The function invoked per iteration.
```


#### Returns


```bash
{boolean} - Returns `true` if any element passes the predicate check, else `false`.
```


#### Example


```ts
const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
]
some(users, ({ active }) => active) // => true

some(users, { 'user': 'barney', 'active': false }) // => false

some(users, 'active') // => true
```