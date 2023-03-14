---
title: fromPairs
definition: fromPairs(pairs)
description: Creates an object from an array of key-value pairs.
---


#### Arguments


```bash
{Array} array - The array of key-value pairs to convert to an object.
```


#### Returns


```bash
{Object} - An object created from the key-value pairs in the input array.
```


#### Example


```ts
fromPairs([['a', 1], ['b', 2], ['c', 3]]); // {a: 1, b: 2, c: 3}
```