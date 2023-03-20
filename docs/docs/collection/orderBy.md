---
title: orderBy
definition: orderBy(collection, [iteratees = [identity]], [orders])
description: Creates an array of elements, sorted in ascending or descending order by one or more properties.
---


#### Arguments


```bash
{Array | Object} collection - The collection to iterate over.
{string | string[]} iteratee - The iteratee to sort by.
{string | string[]} [orders='asc'] - The sort orders for `iteratee`.
```


#### Returns


```bash
{Array} - Returns the new sorted array.
```


#### Example


```ts
const users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
orderBy(users, 'user', 'asc');

orderBy(users, 'user', 'asc');
// => [{ 'user': 'barney', 'age': 34 }, { 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 48 }, { 'user': 'fred', 'age': 40 }]

orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => [{ 'user': 'barney', 'age': 36 }, { 'user': 'barney', 'age': 34 }, { 'user': 'fred', 'age': 48 }, { 'user': 'fred', 'age': 40 }]
```