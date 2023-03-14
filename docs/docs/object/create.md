---
title: create
definition: 
description: Creates a new object with the specified prototype and properties.
---


#### Arguments


```bash
{T} prototype - The prototype of the newly created object.
{T | null} [properties=null] - The properties of the newly created object.
```


#### Returns


```bash
{T} - A new object with the specified prototype and properties.
```


#### Example


```ts
const prototype = { a: 1 };const obj1 = create(prototype);console.log(obj1); // {}const obj2 = create(prototype, { b: 2 });console.log(obj2); // { b: 2 }const obj3 = create(prototype, { a: 3, b: 4 });console.log(obj3); // { a: 3, b: 4 }
```