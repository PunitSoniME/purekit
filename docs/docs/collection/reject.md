---
title: reject
definition: 
description: The opposite of `filter`, this method returns an array of all elements for which
---


#### Arguments


```bash
{T[]} collection - The input collection
{predicateType<T>} [predicate=identity] - The function invoked per iteration
```


#### Returns


```bash
{any[]} - Returns the new filtered array
```


#### Example


```ts
const users = [  { 'user': 'barney', 'active': true },  { 'user': 'fred',   'active': false }];reject(users, ({ active }) => active);
```