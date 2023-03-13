---
title: ary
definition: 
description: Creates a function that accepts up to a certain number of arguments,
---


#### Arguments


```bash
{Function} fn - The function to wrap.
{number} [arity=fn.length] - The maximum number of arguments to accept.
```


#### Returns


```bash

```


#### Example


```ts
const add = (a, b, c) => a + b + c;const addTwo = ary(add, 2);addTwo(1, 2, 3); // returns 3addTwo(1, 2); // returns 3
```