---
title: zip
definition: zip([arrays])
description: Zips together arrays into an array of arrays, with each array element at the same index.
---


#### Arguments


```bash
{Array} array - The first array to zip.
{...[]} args - The other arrays to zip.
```


#### Returns


```bash
{Array} - An array of arrays, each containing one element from each input array at the same index.
```


#### Example


```ts
zip([1, 2], [10, 20], [100, 200]); // => [[1, 10, 100], [2, 20, 200]]
```