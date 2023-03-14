---
title: isMatchWith
definition: 
description: Checks if an object has a value matching the key-value pairs of another object using a customizer function.
---


#### Arguments


```bash
{Object} object - The object to inspect.
{Object} source - The object of property values to match.
{Function} customizer - The function to customize value comparisons.
```


#### Returns


```bash
{boolean} - Returns `true` if `object` has matching key-value pairs from `source`, else `false`.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2, 'c': 3 };const source = { 'a': 1, 'b': 2 };function customizer(objValue, srcValue, key, object, source) {    return objValue === srcValue;}isMatchWith(object, source, customizer); // returns true
```