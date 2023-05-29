---
title: sortedLastIndexBy
definition: sortedLastIndexBy(array, value, [iteratee = identity])
description: Returns the highest index at which value should be inserted into array
---


#### Arguments


```bash
{Array} array - The sorted array to inspect.
{*} value - The value to evaluate.
{Function} [iteratee = identity] - The iteratee invoked per element.
```


#### Returns


```bash
{number} - Returns the index at which value should be inserted into array.
```


#### Example


```ts
const users = [{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }, { id: 3, name: 'Mary' }];

_.sortedLastIndexBy(users, { id: 2 }, ({ id }) => id);
// => 3
```