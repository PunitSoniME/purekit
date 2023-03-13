---
title: sortedIndexBy
definition: 
description: Uses a function to determine the sort order of the input array and returns the index at which the input value should be inserted in order to maintain that sort order.
---


#### Arguments


```bash
{T[]} array - The sorted array to inspect.
{T} value - The value to evaluate.
{Function} [iteratee=identity] - The iteratee invoked per element.
```


#### Returns


```bash

```


#### Example


```ts
var objects = [{ 'x': 4 }, { 'x': 5 }];sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
```