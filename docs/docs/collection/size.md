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
size([1, 2, 3]); // => 3

size({a: 1, b: 2, c: 3}); // => 3

size('hello'); // => 5
```