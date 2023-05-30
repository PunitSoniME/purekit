---
title: constant
definition: constant(arg)
description: Creates a function that always returns the same value.
---


#### Arguments


```bash
{*} arg - The value to return.
```


#### Returns


```bash
{Function} - The new function.
```


#### Example


```ts
const func = _.constant('Hello');

func();
// => 'Hello'

func();
// => 'Hello'
```