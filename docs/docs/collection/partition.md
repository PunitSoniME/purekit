---
title: partition
definition: partition(collection, [predicate = identity])
description: Splits collection into two arrays, one for values that pass a predicate, and one for values that do not pass.
---


#### Arguments


```bash
{Array} collection - The collection to partition.
{Function} [predicate = identity] - The function invoked per iteration to determine if an element passes the predicate.
```


#### Returns


```bash
{Array} - Returns the new array of two arrays, where the first array contains the elements that passed the predicate, and the second contains the elements that failed the predicate.
```


#### Example


```ts
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false }
];
const [activeUsers, inactiveUsers] = partition(users, ({ active }) => active);
console.log(activeUsers);
// => [{ user: 'fred', age: 40, active: true }]

console.log(inactiveUsers);
// [
//   { user: 'barney', age: 36, active: false },
//   { user: 'pebbles', age: 1, active: false }
// ]
```