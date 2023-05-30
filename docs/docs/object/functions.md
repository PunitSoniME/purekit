---
title: functions
definition: functions(object)
description: Returns an array of all the function names in the given object.
---


#### Arguments


```bash
{Object} object - The object to search for functions.
```


#### Returns


```bash
{Array} - An array of all the function names in the object.
```


#### Example


```ts
const obj = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  name: 'John Doe'
};
_.functions(obj);
// => ['add', 'subtract']
```