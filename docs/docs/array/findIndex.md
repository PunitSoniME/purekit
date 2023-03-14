---
title: findIndex
definition: findIndex(array, [predicate = identity], [fromIndex = 0])
description: Returns the index of the first element in the array that satisfies the provided predicate function.
---


#### Arguments


```bash
{Array} array - The array to search.
{Function} [predicate = identity] - The function invoked per iteration.
{number} [fromIndex = 0] - The index to search from.
```


#### Returns


```bash
{number} - Returns the index of the found element, else -1.
```


#### Example


```ts
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

findIndex(users, ({ id }) => id === 2);
// => 1

findIndex(users, ({ name }) => name === 'Mary');
// => -1
```