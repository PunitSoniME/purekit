---
title: times
definition: 
description: Calls a function n times and returns an array of the results.
---


#### Arguments


```bash
{number} n - The number of times to call the function.
{Function} [func=identity] - The function to call. If not provided, returns an array of indices.
```


#### Returns


```bash
{Array} - An array of the results of calling the function.
```


#### Example


```ts
const result = times(3, i => i + 1); // [1, 2, 3]
```