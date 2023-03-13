---
title: curryRight
definition: 
description: Creates a function that can be partially applied from the right.
---


#### Arguments


```bash
{Function} func - The function to curry.
```


#### Returns


```bash

```


#### Example


```ts
const greet = (greeting, name) => `${greeting} ${name}`;const greetGoodbye = curryRight(greet)('Goodbye');greetGoodbye('John');
```