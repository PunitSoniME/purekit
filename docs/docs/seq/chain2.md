---
title: chain2
definition: chain2(value)
description: Creates a chainable object that wraps the given value.
---


#### Arguments


```bash
{*} value - The value to wrap.
{Function|string} func - The function or method to call on the wrapped value.
{...*} args - Any additional arguments to pass to the function or method.
```


#### Returns


```bash
{Object} - An object with a `fn` method to chain function calls and a `value` method to retrieve the wrapped value.
{Object} - A new chainable object that wraps the result of the function or method call.
```


#### Example


```ts
const users = [
{ 'user': 'barney', 'age': 36 },
{ 'user': 'fred', 'age': 40 },
{ 'user': 'pebbles', 'age': 1 }
];
const youngest = chain2(users)
 .fn(sortBy, 'age')
 .fn(map, (function (o: any) {
     return o.user + ' is ' + o.age;
 }))
 .fn(head)
 .value();
//  => 'pebbles is 1'
```