---
title: repeat
definition: repeat([str = ''], [n = 1])
description: Repeats a string `n` times.
---


#### Arguments


```bash
{string} [str = ''] - The string to repeat.
{number} [n = 1] - The number of times to repeat the string.
```


#### Returns


```bash
{string} - The repeated string.
```


#### Example


```ts
_.repeat('hello', 3);
// => 'hellohellohello'

_.repeat('hey');
// => 'hey'
```