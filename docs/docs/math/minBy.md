---
title: minBy
definition: 
description: Returns the object in an array of objects with the minimum value calculated using the given iteratee.
---


#### Arguments


```bash
{Array} collection - The array of objects to search for the minimum value.
{Function} iteratee - The iteratee to use for extracting the values to compare for the minimum.
```


#### Returns


```bash
{*} - The object with the minimum value calculated using the iteratee.
```


#### Example


```ts
_.minBy([{ name: 'alice', age: 25 }, { name: 'bob', age: 30 }, { name: 'charlie', age: 20 }], (obj) => obj.age);
// => { name: 'alice', age: 25 }

_.minBy([{ name: 'alice', age: 30 }, { name: 'brenda', age: 25 }, { name: 'charlie', age: 30 }], (obj) => obj.name.length);
// => { name: 'brenda', age: 25 }
```