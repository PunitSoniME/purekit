---
title: forOwn
definition: 
description: Iterates over an object's own enumerable string keyed properties, calling `iteratee` for each property.
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{Function} iteratee - The function invoked per iteration.
```


#### Returns


```bash

```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };forOwn(object, (value, key) => {  console.log(key);});
```