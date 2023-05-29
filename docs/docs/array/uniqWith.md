---
title: uniqWith
definition: uniqWith(array, [comparator])
description: Creates a duplicate-free version of an array, using a comparator function to compare the elements.
---


#### Arguments


```bash
{Array} array - The array to inspect.
{Function} [comparator = identity] - The function invoked per iteration to compare elements.
```


#### Returns


```bash
{Array} - Returns the new duplicate free array.
```


#### Example


```ts
const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.uniqWith(objects, isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```