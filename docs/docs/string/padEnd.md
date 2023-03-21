---
title: padEnd
definition: padEnd([str = ''], [length = 0], [chars = ' '])
description: Pads a string with additional characters at the end to reach a specified length.
---


#### Arguments


```bash
{string} [str = ''] - The string to pad.
{number} [length = 0] - The target length of the string.
{string} [chars = ' '] - The characters to use for padding. Defaults to a space.
```


#### Returns


```bash
{string} - The padded string.
```


#### Example


```ts
padEnd('hello', 8);
// => 'hello   '

padEnd('hello', 8, '-');
// => 'hello---'
```