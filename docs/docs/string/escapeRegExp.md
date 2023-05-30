---
title: escapeRegExp
definition: escapeRegExp([str=''])
description: Escapes any special characters in a string to be used as a regular expression.
---


#### Arguments


```bash
{string} str - The string to escape.
```


#### Returns


```bash
{string} - The escaped string.
```


#### Example


```ts
const str = 'Hello, world. (can you escape me?)';
_.escapeRegExp(str);
// => 'Hello, world\\. \\(can you escape me\\?\\)'
```