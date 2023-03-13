---
title: extendWith
definition: 
description: This method is like `assignIn` except that it accepts customizer which is
---


#### Arguments


```bash
{T} object - The destination object.
{...any} args - The source objects.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash

```


#### Example


```ts
const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };function customizer(objValue, srcValue) {  if (Array.isArray(objValue)) {    return objValue.concat(srcValue);  }}const result = extendWith(object, other, customizer);console.log(result);
```