---
title: forIn
definition: 
description: Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property.
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{Function} iteratee - The function to invoke per iteration.
```


#### Returns


```bash
{Object} - Returns object.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };forIn(object, function(value, key) {  console.log(key);});
```