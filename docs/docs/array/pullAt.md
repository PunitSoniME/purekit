---
title: pullAt
definition: 
description: Removes elements from an array corresponding to the specified indexes, and returns an array of removed elements.
---


#### Arguments


```bash
{Array} array - The array to modify.
{number|number[]} indexes - The indexes of the elements to remove from the array.
```


#### Returns


```bash
{Array} - An array of removed elements.
```


#### Example


```ts
const arr = [1, 2, 3, 4, 5];
const removed = pullAt(arr, [1, 3]);
console.log(arr); // [1, 3, 5]
console.log(removed); // [2, 4]
```