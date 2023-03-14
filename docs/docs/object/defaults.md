---
title: defaults
definition: 
description: Creates a new object with properties of multiple source objects merged together from left to right.
---


#### Arguments


```bash
{...Object} args - The source objects to merge.
```


#### Returns


```bash
{Object} - A new object with properties of multiple source objects merged together.
```


#### Example


```ts
const obj1 = { a: 1 };const obj2 = { b: 2 };const obj3 = { c: 3 };const result1 = defaults(obj1, obj2, obj3);console.log(result1); // { a: 1, b: 2, c: 3 }const obj4 = { a: 10, d: 4 };const obj5 = { b: 20, a: 5 };const result2 = defaults(obj4, obj5);console.log(result2); // { a: 5, d: 4, b: 20 }
```