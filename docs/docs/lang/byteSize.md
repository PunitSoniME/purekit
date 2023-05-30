---
title: byteSize
definition: byteSize(str)
description: Calculates the byte size of a string.
---


#### Arguments


```bash
{string} str - The input string.
```


#### Returns


```bash
{number} - The size of the string in bytes.
```


#### Example


```ts
_.byteSize('😀');
// => 4

_.byteSize('Hello World');
// => 11

_.byteSize("Hello, world!");
// => 13
```