---
title: partial
definition: 
description: Creates a partial function that is bound to the specified arguments.
---


#### Arguments


```bash
{Function} func - The function to partially apply arguments to.
{...any} args - The arguments to partially apply to the function.
```


#### Returns


```bash

```


#### Example


```ts
const add = (x, y, z) => x + y + z;const add5 = partial(add, 2, 3);add5(4); // returns 9
```