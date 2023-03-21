---
title: valuesIn
definition: valuesIn(object)
description: Returns an array of the values of all enumerable properties, including inherited properties, of an object.
---


#### Arguments


```bash
{Object} object - The object to extract the values from.
```


#### Returns


```bash
{Array} - An array of the object's values, including inherited properties.
```


#### Example


```ts
const obj = { a: 1 };
const child = Object.create(obj);
child.b = 2;
valuesIn(child);
// => [1, 2]
```