---
title: toPath
definition: toPath(value)
description: Converts a string path to an array of path segments.
---


#### Arguments


```bash
{*} path - The string path to convert.
```


#### Returns


```bash
{Array} - An array of path segments.
```


#### Example


```ts
_.toPath('a.b[0].c');
// => ['a', 'b', '0', 'c']
```