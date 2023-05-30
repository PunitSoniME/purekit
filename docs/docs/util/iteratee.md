---
title: iteratee
definition: iteratee([predicate = identity])
description: Creates a function that can be used to iterate over a collection.
---


#### Arguments


```bash
{Function} [predicate = identity] - The predicate function to convert into an iteratee.
```


#### Returns


```bash
{Function} - Returns the new iteratee function.
```


#### Example


```ts
const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }];
const sortByAge = users.sort(_.iteratee(user => user.age));
// => [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }]
```