---
title: zip
definition: 
description: Zips together arrays into an array of arrays, with each array element at the same index.
---


#### Arguments


```bash
{T[]} array - The first array to zip.
{...T[][]} args - The other arrays to zip.
```


#### Returns


```bash

```


#### Example


```ts
zip([1, 2], [10, 20], [100, 200]); // returns [[1, 10, 100], [2, 20, 200]]
```