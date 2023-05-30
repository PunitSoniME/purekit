---
title: values
definition: values(object)
description: Returns an array of the values of the own enumerable string-keyed properties of an object.
---


#### Arguments


```bash
{Object} object - The object to extract the values from.
```


#### Returns


```bash
{Array} - An array of the object's values.
```


#### Example


```ts
const obj = { a: 1, b: 2, c: 3 };
_.values(obj);
// => [1, 2, 3]
```