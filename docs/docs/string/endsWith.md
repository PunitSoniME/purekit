---
title: endsWith
definition: endsWith([str = ''], [target], [position = str.length])
description: Checks if a string ends with a specified target string.
---


#### Arguments


```bash
{string} str - The string to check.
{string} target - The target string to search for at the end of the original string.
{number} [position=str.length] - The position within the original string to end the search at.
```


#### Returns


```bash
{boolean} - `true` if the original string ends with the target string, `false` otherwise.
```


#### Example


```ts
const str1 = 'Hello, world!';
const str2 = 'Hello, world';
const str3 = 'hello, world!';

_.endsWith(str1, '!');
// =>  true

_.endsWith(str2, '!');
// =>  false

_.endsWith(str3, 'world', 7);
// =>  true
```