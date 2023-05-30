---
title: attempt
definition: attempt(func, [args])
description: Attempts to invoke a function with the given arguments and returns either the result or the error object.
---


#### Arguments


```bash
{Function} func - The function to invoke.
{...*} args - The arguments to pass to the function.
```


#### Returns


```bash
{*} - The result of the function or the error object.
```


#### Example


```ts
_.attempt((a, b) => a + b, 2, 4);
// => 6

_.attempt(str => str.length, null);
// => TypeError: Cannot read property 'length' of null
```