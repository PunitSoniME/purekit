---
title: xorWith
definition: xorWith([arrays], [comparator])
description: Creates an array of unique values that are included in the first given array,
---


#### Arguments


```bash
{Array} ...array - The array to inspect.
{function} comparator - The function to determine the uniqueness of each element.
```


#### Returns


```bash
{Array} - Returns the new array of filtered values.
```


#### Example


```ts
const array1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const array2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
const result = _.xorWith(array1, array2, (a, b) => a.x === b.x && a.y === b.y);

console.log(result);
// => [{x: 2, y: 1}, {x: 1, y: 1}]
```