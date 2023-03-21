---
title: findKey
definition: findKey(object, [predicate = identity])
description: Iterates over an object's own and inherited enumerable properties, returning the first key that the predicate function returns truthy for.
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{predicateType} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{*} - The key of the first element that satisfies the predicate function, otherwise undefined.
```


#### Example


```ts
const users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
const isActive = (value) => value.active;
const result = findKey(users, isActive);
console.log(result);
// => 'barney'
```