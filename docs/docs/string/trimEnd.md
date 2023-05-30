---
title: trimEnd
definition: trimEnd([str = ''], [characters = ''])
description: Removes specified characters from the end of a string.
---


#### Arguments


```bash
{string} [str = ''] - The string to trim.
{string} [characters = ''] - The characters to remove from the end of the string.
```


#### Returns


```bash
{string} - The trimmed string.
```


#### Example


```ts
_.trimEnd('Hello, World   ');
// => 'Hello, World'

_.trimEnd('Hello, World!!!', '!');
// => 'Hello, World'
```