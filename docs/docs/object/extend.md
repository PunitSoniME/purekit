---
title: extend
definition: 
description: Assigns own enumerable string keyed properties of source objects to the destination object.
---


#### Arguments


```bash
{T} object - The destination object.
{...any[]} sources - The source objects.
```


#### Returns


```bash
{T} - The modified object.
```


#### Example


```ts
const object = { a: 1 };const other = { b: 2 };extend(object, other);
```