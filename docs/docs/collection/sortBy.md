---
title: sortBy
definition: sortBy(collection, [iteratees = [identity]])
description: Sorts the elements of an array based on the iteratees passed as arguments.
---


#### Arguments


```bash
{Array} collection - The array to iterate over.
{(string | Function | (string | Function)[])} [iteratees = [identity]] - The iteratees to sort the array.
```


#### Returns


```bash
{Array} - Returns the new sorted array.
```


#### Example


```ts
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 },
];
sortBy(users, [user => user.user, user => user.age]);
// => [{user: "barney", age: 34}, {user: "barney", age: 36}, {user: "fred", age: 40}, {user: "fred", age: 48}]

sortBy(users, 'user');
// => [{user: "barney", age: 36}, {user: "barney", age: 34}, {user: "fred", age: 48}, {user: "fred", age: 40}]

sortBy(users, user => user.age);
// => [{user: "barney", age: 34}, {user: "barney", age: 36}, {user: "fred", age: 40}, {user: "fred", age: 48}]
```