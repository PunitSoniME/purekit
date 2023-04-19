---
title: mergeWith
definition: mergeWith(object, [sources], customizer)
description: Merges the properties of two or more objects into a single object, using a customizer function to determine how to handle conflicts. The customizer is invoked with six arguments - (objValue, srcValue, key, object, source, stack).
---


#### Arguments


```bash
{object} object - The destination object.
{...object} sources - The source objects.
{(objValue: any, srcValue: any, key: string, object: object, source: object, stack: any[]) => any} customizer - The function to customize assigned values.
```


#### Returns


```bash
{object} - The merged object.
```


#### Example


```ts
// Merge arrays using a customizer function
function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
const object = { 'a': [1], 'b': [2] };
const other = { 'a': [3], 'b': [4] };
const merged = mergeWith(object, other, customizer);
console.log(merged);
// =>	{ 'a': [1, 3], 'b': [2, 4] }


// Merge objects using a customizer function
function customizer(objValue, srcValue) {
    if (typeof objValue === 'object' && typeof srcValue === 'object' && objValue !== null && srcValue !== null) {
      return mergeWith(objValue, srcValue, customizer);
    }
}
 
const object = { 'a': { 'x': 1 }, 'b': { 'y': 2 } };
const other = { 'a': { 'y': 3 }, 'b': { 'z': 4 } };
const merged = mergeWith(object, other, customizer);
console.log(merged);
// =>	{ 'a': { 'x': 1, 'y': 3 }, 'b': { 'y': 2, 'z': 4 } }
```