---
title: lowerCase
definition: lowerCase([str = ''])
description: Converts a string to lowercase with spaces between words.
---


#### Arguments


```bash
{string} [str = ''] - The string to convert.
```


#### Returns


```bash
{string} - The converted string.
```


#### Example


```ts
lowerCase('fooBar123');
// => 'foo bar 123'

lowerCase('FOO-BAR.BAZ');
// => 'foo bar baz'
```