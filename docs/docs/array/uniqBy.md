---
title: uniqBy
definition: 
description: Creates a new array of unique values, based on the result of the given iteratee function.
---


#### Arguments


```bash
{T[]} array - The input array.
{predicateType<T>} [iteratee=identity] - The function used to get the unique value for each element.
```


#### Returns


```bash
{T[]} - The new array of unique values.
```


#### Example


```ts
const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'Jim' }];const result = uniqBy(array, 'id');console.log(result); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```