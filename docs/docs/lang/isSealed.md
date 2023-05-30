---
title: isSealed
definition: isSealed(collection)
description: Checks if an object is sealed.
---


#### Arguments


```bash
{Object | Array} collection - The object or array to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the object is sealed, else `false`.
```


#### Example


```ts
const obj = { a: 1, b: 2 };

_.isSealed(obj);
// => false

Object.seal(obj);
_.isSealed(obj);
// => true

const arr = [1, 2, 3];
_.isSealed(arr);
// => false

Object.seal(arr);
_.isSealed(arr);
// => true

_.isSealed(obj);
// => true

_.isSealed(arr);
// => true
```