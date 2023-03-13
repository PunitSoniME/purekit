---
title: iteratee
definition: 
description: Creates a function that can be used to iterate over a collection.
---


#### Arguments


```bash
{predicateType<T>} [predicate=identity] - The predicate function to convert into an iteratee.
```


#### Returns


```bash

```


#### Example


```ts
const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }];const sortByAge = users.sort(iteratee(user => user.age));
```