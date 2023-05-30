---
title: trimStart
definition: trimStart([str = ''], [characters = ''])
description: Removes specified characters from the beginning of a string.
---


#### Arguments


```bash
{string} [str = ''] - The string to trim.
{string} [characters = ''] - The characters to remove from the beginning of the string.
```


#### Returns


```bash
{string} - The trimmed string.
```


#### Example


```ts
_.trimStart('   Hello, World   ');
// => 'Hello, World   '

_.trimStart('!!!Hello, World', '!');
// => 'Hello, World'
```