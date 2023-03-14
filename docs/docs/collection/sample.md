---
title: sample
definition: 
description: Returns a random element from a collection
---


#### Arguments


```bash
{Array|Object} collection - The collection to sample from
```


#### Returns


```bash
{*} - Returns the random element
```


#### Example


```ts
sample([1, 2, 3, 4, 5]) // returns a random number from the arraysample({ a: 1, b: 2, c: 3 }) // returns a random value from the object
```