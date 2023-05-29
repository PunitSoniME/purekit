---
title: uniqBy
definition: unionBy([arrays], [iteratee = identity])
description: Creates a new array of unique values, based on the result of the given iteratee function.
---


#### Arguments


```bash
{Array} array - The input array.
{Function} [iteratee = identity] - The function used to get the unique value for each element.
```


#### Returns


```bash
{Array} - The new array of unique values.
```


#### Example


```ts
const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'Jim' }];

_.uniqBy(array, 'id');
// => [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```