---
title: dropRightWhile
definition: dropRightWhile(array, [predicate = identity])
description: Creates a slice of the `array` with elements dropped from the end.
---


#### Arguments


```bash
{Array} array - The array to inspect.
{Function} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Array} - Returns the slice of `array`.
```


#### Example


```ts
_.dropRightWhile([1, 2, 3, 4], n => n > 2);
// => [1, 2]

var data = [
    { 'user': 'barney', 'active': true }, 
    { 'user': 'fred', 'active': false }, 
    { 'user': 'pebbles', 'active': false }
];
_.dropRightWhile(data, o => !o.active);
// => [{ 'user': 'barney', 'active': true }]
```