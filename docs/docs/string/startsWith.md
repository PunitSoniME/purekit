---
title: startsWith
definition: 
description: Checks if a string starts with a given target string.
---


#### Arguments


```bash
{string} [str=''] - The string to search in.
{string} [target=''] - The target string to search for.
{number} [position=0] - The position in the string at which to begin searching.
```


#### Returns


```bash

```


#### Example


```ts
startsWith('hello world', 'hello'); // truestartsWith('hello world', 'world'); // falsestartsWith('hello world', 'world', 6); // true
```