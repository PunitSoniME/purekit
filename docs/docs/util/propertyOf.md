---
title: propertyOf
definition: propertyOf(object)
description: The opposite of `property` function. This method creates a function that returns the value at a given path of an object.
---


#### Arguments


```bash
{Object} obj - The object to query.
{Array | string} path - The path of the property to get.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const user = { name: 'John', address: { street: '123 Main St.' } };// =>

_.propertyOf(user)(['address', 'street']);
// => '123 Main St.'
```