---
title: keyBy
definition: keyBy(collection, [iteratee = identity])
description: Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
---


#### Arguments


```bash
{Array} collection - The collection to iterate over.
```


#### Returns


```bash
{Object} - Returns the composed aggregate object.
```


#### Example


```ts
const users = [
  { 'id': '1', 'name': 'Alice' },
  { 'id': '2', 'name': 'Bob' },
  { 'id': '3', 'name': 'Alice' }
];
keyBy(users, 'id');
// => { '1': { 'id': '1', 'name': 'Alice' }, '2': { 'id': '2', 'name': 'Bob' }, '3': { 'id': '3', 'name': 'Alice' } }

keyBy(users, (user) => user.name);
// => { 'Alice': { 'id': '3', 'name': 'Alice' }, 'Bob': { 'id': '2', 'name': 'Bob' } }
```