---
title: replace
definition: 
description: Replaces matches in a string with a replacement string or RegExp.
---


#### Arguments


```bash
{string} str - The string to modify.
{string|RegExp} pattern - The pattern to search for in the string.
{string|RegExp} replacement - The replacement string or RegExp.
```


#### Returns


```bash
{string} - The modified string.
```


#### Example


```ts
replace('Hello, world!', 'world', 'John'); // 'Hello, John!'
```