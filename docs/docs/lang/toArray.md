---
title: toArray
definition: toArray(value)
description: Converts a given value to an array.
---


#### Arguments


```bash
{*} value - The value to convert to an array.
```


#### Returns


```bash
{any[]} - The resulting array.
```


#### Example


```ts
_.toArray('hello');
// => ['h', 'e', 'l', 'l', 'o']

_.toArray([1, 2, 3]);
// => [1, 2, 3]

_.toArray(new Set([1, 2, 3]));
// => [1, 2, 3]

_.toArray({a: 1, b: 2});
// => [1, 2]

_.toArray(null);
// => []
```