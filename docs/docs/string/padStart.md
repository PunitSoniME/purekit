---
title: padStart
definition: padStart([str = ''], [length = 0], [chars = ' '])
description: Pads the start of a string with the given characters until it reaches the specified length.
---


#### Arguments


```bash
{string} [str = ''] - The input string to pad.
{number} [length = 0] - The length to pad the string to.
{string} [chars = ' '] - The characters to use for padding.
```


#### Returns


```bash
{string} - The padded string.
```


#### Example


```ts
padStart('hello', 10);
// => '     hello'

padStart('world', 10, '*');
// => '*****world'
```