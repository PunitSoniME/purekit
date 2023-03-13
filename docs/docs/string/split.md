---
title: split
definition: 
description: Splits a string into an array of substrings based on a specified separator.
---


#### Arguments


```bash
{string} [str=''] - The string to be split.
{string | RegExp} separator - Specifies the character(s) to use for separating the string.
{number} limit - A non-negative integer specifying the number of splits.
```


#### Returns


```bash

```


#### Example


```ts
split('a,b,c,d', ',', 2); // returns ['a', 'b']
```