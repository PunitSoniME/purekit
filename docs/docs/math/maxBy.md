---
title: maxBy
definition: 
description: Returns the maximum value of a collection based on an iteratee function. If multiple
---


#### Arguments


```bash
{Array<T>} collection - The collection to iterate over.
{predicateType<T>} iteratee - The iteratee to determine the max value.
```


#### Returns


```bash
{T|undefined} - Returns the maximum value or undefined if the collection is empty.
```


#### Example


```ts
const users = [  { name: 'Alice', age: 25 },  { name: 'Bob', age: 30 },  { name: 'Charlie', age: 20 }];const oldestUser = maxBy(users, (user) => user.age);console.log(oldestUser); // { name: 'Bob', age: 30 }
```