---
title: entries
definition: entries(object)
description: Creates an array of key-value pairs for the given object.
---


#### Arguments


```bash
{Object} object - The object to convert to pairs.
```


#### Returns


```bash
{Array} - An array of key-value pairs for the given object.
```


#### Example


```ts
const obj = { a: 1, b: 2, c: 3 };
const result = entries(obj);
console.log(result);
// => [['a', 1], ['b', 2], ['c', 3]]
```