---
title: trim
definition: trim([str = ''], [characters =  ''])
description: Removes specified characters from the beginning and end of a string.
---


#### Arguments


```bash
{string} [str = ''] - The string to trim.
{string} [characters = ''] - The characters to remove from the string.
```


#### Returns


```bash
{string} - The trimmed string.
```


#### Example


```ts
trim('  Hello, World!   ');
// => 'Hello, World!'

trim('JavaScript is awesome', 'weojsacm');
// => 'JavaScript is awesome'
```