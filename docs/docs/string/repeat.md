---
title: repeat
definition: 
description: Repeats a string `n` times.
---


#### Arguments


```bash
{string} str - The string to repeat.
{number} [n=1] - The number of times to repeat the string.
```


#### Returns


```bash
{string} - The repeated string.
```


#### Example


```ts
repeat('hello', 3); // returns 'hellohellohello'repeat('hey'); // returns 'hey'
```