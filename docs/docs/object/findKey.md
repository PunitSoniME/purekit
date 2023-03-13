---
title: findKey
definition: 
description: Iterates over an object's own and inherited enumerable properties, returning the first key that the predicate function returns truthy for.
---


#### Arguments


```bash
{object} object - The object to iterate over.
{predicateType} predicate - The function invoked per iteration.
```


#### Returns


```bash
{any} - The key of the first element that satisfies the predicate function, otherwise undefined.
```


#### Example


```ts
const users = {
```