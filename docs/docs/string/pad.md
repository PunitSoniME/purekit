---
title: pad
definition: pad([str = ''], [length=0], [chars = ' '])
description: Pads a string with a specified character to a specified length.
---


#### Arguments


```bash
{string} [str = ''] - The string to pad.
{number} length - The length to pad the string to.
{string} [chars = ' '] - The character to use for padding (default is space).
```


#### Returns


```bash
{string} - The padded string.
```


#### Example


```ts
pad('hello', 10);
// => '  hello   '

pad('hello', 10, '-');
// => '--hello---'
```