---
title: tail
definition: tail(array)
description: Returns all the elements of an array except for the first one.
---


#### Arguments


```bash
{Array} array - The input array.
```


#### Returns


```bash
{Array} - A new array containing all elements of the input array except the first one.
```


#### Example


```ts
const arr = [1, 2, 3, 4];

const result = tail(arr);

console.log(result); // =>  [2, 3, 4]
```