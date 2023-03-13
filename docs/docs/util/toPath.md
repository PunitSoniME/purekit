---
title: toPath
definition: 
description: Converts a string path to an array of path segments.
---


#### Arguments


```bash
{any} path - The string path to convert.
```


#### Returns


```bash
{Array} - An array of path segments.
```


#### Example


```ts
const result = toPath('a.b[0].c'); // ['a', 'b', '0', 'c']
```