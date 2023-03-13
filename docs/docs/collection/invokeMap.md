---
title: invokeMap
definition: 
description: Invokes the method at `path` of each element in the `collection`.
---


#### Arguments


```bash
{Array|Object} collection - The collection to iterate over.
{Array|string|Function} path - The path of the method to invoke or a function that will be invoked for each element.
{...*} [args] - The arguments to invoke the method with.
```


#### Returns


```bash
{Array} - Returns the array of results.
```


#### Example


```ts
const users = [  { 'user': 'barney', 'age': 36 },  { 'user': 'fred', 'age': 40 }];invokeMap(users, 'user'); // => ['barney', 'fred']invokeMap(users, (o) => o.user + ' is ' + o.age); // => ['barney is 36', 'fred is 40']invokeMap(users, ['user', 'age']); // => [['barney', 36], ['fred', 40]]
```