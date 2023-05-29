---
title: findLast
definition: 
description: Returns the last element in the `collection` that satisfies the `iteratee` function.
---


#### Arguments


```bash
{Array|Object} collection - The collection to iterate over.
{Function} [iteratee=identity] - The iteratee invoked per element.
{number} [fromIndex=0] - The index to search from.
```


#### Returns


```bash
{*} - Returns the matched element, else `undefined`.
```


#### Example


```ts
_.findLast([1, 2, 3, 4], (n) => n % 2 === 1);
// => 3
```