---
title: reject
definition: reject(collection, [predicate = identity])
description: The opposite of `filter`, this method returns an array of all elements for which
---


#### Arguments


```bash
{Array} collection - The input collection
{Function} [predicate = identity] - The function invoked per iteration
```


#### Returns


```bash
{[]} - Returns the new filtered array
```


#### Example


```ts
const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
reject(users, ({ active }) => active);
// => [{ 'user': 'fred', 'active': false }]
```