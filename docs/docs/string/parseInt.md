---
title: parseInt
definition: parseInt(str, [radix = 10])
description: Parses a string and returns an integer of the specified radix.
---


#### Arguments


```bash
{string} str - The string to parse.
{number} [radix = 10] - The radix used to parse the string. Must be between 2 and 36.
```


#### Returns


```bash
{number} - An integer parsed from the input string.
```


#### Example


```ts
_.parseInt('42');
// => 42

_.parseInt('101010', 2);
// => 42
```