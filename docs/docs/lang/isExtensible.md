---
title: isExtensible
definition: isExtensible(value)
description: Checks if an object is extensible (whether it can have new properties added to it or not).
---


#### Arguments


```bash
{Object|Array} collection - The collection to check for extensibility.
```


#### Returns


```bash
{boolean} - Returns `true` if the collection is extensible, else `false`.
```


#### Example


```ts
const obj = { a: 1 };
const arr = [1, 2, 3];
Object.preventExtensions(obj);

_.isExtensible(obj);
// => false

_.isExtensible(arr);
// => true
```