---
title: castArray
definition: castArray(input)
description: Casts the given value as an array if it's not already an array.
---


#### Arguments


```bash
{*} input - The value to cast as an array.
```


#### Returns


```bash
{Array} - The input value as an array, or an array with the input value as the only element.
```


#### Example


```ts
castArray('hello');
// => ['hello']

castArray([1, 2, 3]);
// => [1, 2, 3]

castArray({ a: 1 });
// => [{ a: 1 }]
```