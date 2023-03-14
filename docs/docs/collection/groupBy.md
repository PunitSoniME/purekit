---
title: groupBy
definition: 
description: Groups the elements of an array into an object based on a provided predicate.
---


#### Arguments


```bash
{Array} collection - The input collection.
{Function} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Object} - Returns the composed aggregate object.
```


#### Example


```ts
const users = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 25 },
  { name: 'Eva', age: 21 }
];
groupBy(users, user => user.age);
```