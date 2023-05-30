---
title: method
definition: method(path, [args])
description: Creates a function that invokes the method at `path` of a given object.
---


#### Arguments


```bash
{string | Array} path - The path of the method to invoke.
{...*} args - The arguments to invoke the method with.
```


#### Returns


```bash
{Function} - Returns the new method function.
```


#### Example


```ts
const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }];
const getNames = _.method('name');
const names = users.map(getNames);
// => ['Alice', 'Bob']
```