---
title: findLastIndex
definition: findLastIndex(array, [predicate = identity], [fromIndex = array.length-1])
description: Returns the index of the last element in the array that satisfies the provided testing function.
---


#### Arguments


```bash
{Array} array - The array to search in.
{Function} [predicate = identity] - The function invoked per iteration.
{number} [fromIndex = 0] - The index to start searching from.
```


#### Returns


```bash
{number} - Returns the index of the found element, else -1.
```


#### Example


```ts
const users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = findLastIndex(users, user => user.user === 'fred');

console.log(result);
// => 1
```