---
title: partial
definition: partial(func, [partials])
description: Creates a partial function that is bound to the specified arguments.
---


#### Arguments


```bash
{Function} func - The function to partially apply arguments to.
{...any} args - The arguments to partially apply to the function.
```


#### Returns


```bash
{Function} - Returns the new partially applied function.
```


#### Example


```ts
const add = (x, y, z) => x + y + z;
const add5 = partial(add, 2, 3);

add5(4);
// => 9
```