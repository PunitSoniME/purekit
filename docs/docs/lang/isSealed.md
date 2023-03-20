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

console.log(Object.isSealed(obj));
// => false

Object.seal(obj);
console.log(Object.isSealed(obj));
// => true

const arr = [1, 2, 3];
console.log(Object.isSealed(arr));
// => false

Object.seal(arr);
console.log(Object.isSealed(arr));
// => true

console.log(isSealed(obj));
// => true

console.log(isSealed(arr));
// => true
```