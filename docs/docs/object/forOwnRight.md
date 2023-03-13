---
title: forOwnRight
definition: 
description: Iterates over own enumerable string keyed properties of an object in reverse order
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
const object = { 'a': 1, 'b': 2 };forOwnRight(object, (value, key) => {  console.log(key, value);});
```