---
title: pullAllBy
definition: 
description: Removes all given elements from the array using a custom iteratee function
---


#### Arguments


```bash
{T[]} array - The source array
{T[]} elementsToRemove - The array of elements to be removed
{Function} [iteratee=identity] - The function invoked per iteration
```


#### Returns


```bash

```


#### Example


```ts
const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }];const removedUsers = pullAllBy(users, [{ name: 'John' }, { name: 'Jane' }], 'name');console.log(removedUsers); // [{ name: 'Bob', age: 40 }]
```