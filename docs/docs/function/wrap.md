---
title: wrap
definition: wrap(value, [wrapper = func])
description: Creates a new function that calls `func` with `value` as the first argument and passes any additional arguments to `func` after that.
---


#### Arguments


```bash
{*} value - The value to pass as the first argument to `func`.
{Function} func - The function to wrap.
```


#### Returns


```bash
{Function} - A new function that wraps `func`.
```


#### Example


```ts
const greet = name => `Hello, ${name}!`;
const greetBob = wrap('Bob', greet);

console.log(greetBob());
// => "Hello, Bob!"

console.log(greetBob('Alice'));
// => "Hello, Bob!"
```