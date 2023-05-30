---
title: isFrozen
definition: isFroze(collection)
description: Checks if an object or array is frozen using the built-in `Object.isFrozen()` method.
---


#### Arguments


```bash
{Object | Array} collection - The object or array to check if it's frozen.
```


#### Returns


```bash
{boolean} - Returns `true` if the object or array is frozen, else `false`.
```


#### Example


```ts
const obj = {a: 1, b: 2};
Object.freeze(obj);
_.isFrozen(obj);
// => true

const arr = [1, 2, 3];
Object.freeze(arr);
_.isFrozen(arr);
// => true

const obj2 = {a: {b: 1}};
_.isFrozen(obj2);
// => false
```