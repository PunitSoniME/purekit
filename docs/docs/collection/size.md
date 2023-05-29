---
title: size
definition: size(collection)
description: Returns the size of the given collection.
---


#### Arguments


```bash
{Array | Object | string} collection - The collection to determine the size of.
```


#### Returns


```bash
{number} - The size of the collection.
```


#### Example


```ts
_.size([1, 2, 3]);
// => 3

_.size({a: 1, b: 2, c: 3});
// => 3

_.size('hello');
// => 5
```