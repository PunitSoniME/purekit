---
title: rest
definition: 
description: Creates a function that invokes the provided function with all but the first argument of the passed arguments.
---


#### Arguments


```bash
{Function} func - The function to partially apply arguments to.
```


#### Returns


```bash

```


#### Example


```ts
const logRest = rest(console.log);logRest(1, 2, 3); // Output: 1, 2, 3logRest(1); // Output: 1
```