---
title: startsWith
definition: startsWith([str = ''], [target = ''], [position = 0])
description: Checks if a string starts with a given target string.
---


#### Arguments


```bash
{string} [str = ''] - The string to search in.
{string} [target = ''] - The target string to search for.
{number} [position = 0] - The position in the string at which to begin searching.
```


#### Returns


```bash
{boolean} - `true` if the string starts with the target string, `false` otherwise.
```


#### Example


```ts
_.startsWith('hello world', 'hello');
// => true

_.startsWith('hello world', 'world');
// => false

_.startsWith('hello world', 'world', 6);
// => true
```