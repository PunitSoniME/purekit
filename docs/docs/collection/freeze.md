---
title: freeze
definition: freeze(collection)
description: A frozen object can no longer be changed. new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
---


#### Arguments


```bash
{Object | Array} collection - The collection to iterate over.
```


#### Returns


```bash
{Object | Array} - Returns The collection that was passed to the function.
```


#### Example


```ts
let obj = { a: 1, b: 2 };
freeze(obj);

obj.b = 3;
console.log(obj);
//  => { a: 1, b: 2 }
```