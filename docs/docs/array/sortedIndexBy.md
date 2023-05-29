---
title: sortedIndexBy
definition: sortedIndexBy(array, value, [iteratee = identity])
description: Uses a function to determine the sort order of the input array and returns the index at which the input value should be inserted in order to maintain that sort order.
---


#### Arguments


```bash
{Array} array - The sorted array to inspect.
{*} value - The value to evaluate.
{Function} [iteratee = identity] - The iteratee invoked per element.
```


#### Returns


```bash
{number} - Returns the index at which the value should be inserted into the array.
```


#### Example


```ts
var objects = [{ 'x': 4 }, { 'x': 5 }];

_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0

_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0
```