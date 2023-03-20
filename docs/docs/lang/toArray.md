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
toArray('hello')
// => ['h', 'e', 'l', 'l', 'o']

toArray([1, 2, 3])
// => [1, 2, 3]

toArray(new Set([1, 2, 3]))
// => [1, 2, 3]

toArray({a: 1, b: 2})
// => [1, 2]
```