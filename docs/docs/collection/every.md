---
title: every
definition: 
description: Checks if every element in the collection passes the predicate check
---


#### Arguments


```bash
{Array} collection - The collection to iterate over
{Function} [iteratee=identity] - The function invoked per iteration
```


#### Returns


```bash
{boolean} - Returns true if all elements pass the predicate check, else false
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
const isGreaterThanZero = (num) => num > 0;
const isEven = (num) => num % 2 === 0;
every(arr, isGreaterThanZero); // true
every(arr, isEven); // false
```