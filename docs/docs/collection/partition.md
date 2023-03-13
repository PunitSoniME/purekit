---
title: partition
definition: 
description: Splits collection into two arrays: one for values that pass a predicate, and one for values that do not pass.
---


#### Arguments


```bash
{T[]} collection - The collection to partition.
{predicateType<T>} [predicate=identity] - The function invoked per iteration to determine if an element passes the predicate.
```


#### Returns


```bash

```


#### Example


```ts
const users = [  { user: 'barney', age: 36, active: false },  { user: 'fred', age: 40, active: true },  { user: 'pebbles', age: 1, active: false }];const [activeUsers, inactiveUsers] = partition(users, ({ active }) => active);console.log(activeUsers); // [{ user: 'fred', age: 40, active: true }]console.log(inactiveUsers);
```