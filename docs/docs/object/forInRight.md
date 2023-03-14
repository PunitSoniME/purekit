---
title: forInRight
definition: 
description: Iterates over an object's own and inherited enumerable string keyed properties in reverse order,
---


#### Arguments


```bash
{T} object - The object to iterate over.
{Function} iteratee - The function invoked per iteration.
```


#### Returns


```bash
{T} - Returns the object.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };forInRight(object, (value, key) => {  console.log(key);});
```