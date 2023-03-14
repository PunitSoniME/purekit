---
title: wrap
definition: 
description: Creates a new function that calls `func` with `value` as the first argument
---


#### Arguments


```bash
{any} value - The value to pass as the first argument to `func`.
{Function} func - The function to wrap.
```


#### Returns


```bash
{Function} - A new function that wraps `func`.
```


#### Example


```ts
const greet = name => `Hello, ${name}!`;const greetBob = wrap('Bob', greet);console.log(greetBob()); // logs "Hello, Bob!"console.log(greetBob('Alice')); // logs "Hello, Bob!"
```