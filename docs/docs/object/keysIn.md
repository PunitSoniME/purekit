---
title: keysIn
definition: keysIn(object)
description: This method returns all the own and inherited enumerable property names of an object.
---


#### Arguments


```bash
{Object} object - The object to query.
```


#### Returns


```bash
{Array} - Returns the array of property names.
```


#### Example


```ts
_.keysIn({a: 1, b: 2});
// => ['a', 'b']
```