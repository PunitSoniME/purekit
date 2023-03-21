---
title: methodOf
definition: methodOf(object, [args])
description: Creates a function that invokes the method at `path` of a given object.
---


#### Arguments


```bash
{Object} object - The object to query.
```


#### Returns


```bash
{Function} - Returns the new invoker function.
```


#### Example


```ts
const obj = {
  foo: {
    bar: (a, b) => a + b
  }
};
const barMethod = methodOf(obj)(['foo', 'bar']);
console.log(barMethod(1, 2));
// => 3
```