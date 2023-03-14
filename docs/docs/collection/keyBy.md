---
title: keyBy
definition: 
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
```