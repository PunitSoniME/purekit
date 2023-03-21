---
title: assignInWith
definition: assignInWith(object, sources, [customizer])
description: This method is like `assignIn` except that it accepts customizer which is
---


#### Arguments


```bash
{Object} object - The destination object.
{...Object} args - The source objects.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash
{Object} - Returns `object`.
```


#### Example


```ts
const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };

function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const result = assignInWith(object, other, customizer);
console.log(result);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```