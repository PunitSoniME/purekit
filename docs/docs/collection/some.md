---
title: some
definition: 
description: Checks if `predicate` returns truthy for any element of `collection`.
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const users = [  { 'user': 'barney', 'active': true },  { 'user': 'fred',   'active': false }]some(users, ({ active }) => active) // => truesome(users, { 'user': 'barney', 'active': false }) // => falsesome(users, 'active') // => true
```