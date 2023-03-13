---
title: padStart
definition: 
description: Pads the start of a string with the given characters until it reaches the specified length.
---


#### Arguments


```bash
{string} [str=''] - The input string to pad.
{number} [length=0] - The length to pad the string to.
```


#### Returns


```bash

```


#### Example


```ts
padStart('hello', 10); // returns '     hello'padStart('world', 10, '*'); // returns '*****world'
```