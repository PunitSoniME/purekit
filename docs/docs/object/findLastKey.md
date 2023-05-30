---
title: findLastKey
definition: findLastKey(object, [predicate = identity])
description: This method is like `findKey` except that it iterates over elements of a collection from right to left.
---


#### Arguments


```bash
{object} object - The object to iterate over.
{predicateType} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{*} - The key of the last element that satisfies the predicate function, otherwise undefined.
```


#### Example


```ts
const users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
const isActive = (value) => value.active;
_.findLastKey(users, isActive);
// => 'pebbles'
```