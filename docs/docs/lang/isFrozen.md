---
title: isFrozen
definition: 
description: Checks if an object or array is frozen using the built-in `Object.isFrozen()` method.
---


#### Arguments


```bash
{Object|Array} collection - The object or array to check if it's frozen.
```


#### Returns


```bash
{boolean} - Returns `true` if the object or array is frozen, else `false`.
```


#### Example


```ts
const obj = {a: 1, b: 2};Object.freeze(obj);console.log(isFrozen(obj)); // trueconst arr = [1, 2, 3];Object.freeze(arr);console.log(isFrozen(arr)); // trueconst obj2 = {a: {b: 1}};console.log(isFrozen(obj2)); // false
```