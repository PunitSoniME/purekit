---
title: defer
definition: defer(fn, ...args)
description: Defers the execution of a function by scheduling it to run after a minimum delay of 1 millisecond.
---


#### Arguments


```bash
{Function} fn - The function to be deferred.
{...any} args - The arguments to be passed to the function.
```


#### Returns


```bash
{number} - The timeout identifier that can be used to cancel the deferred execution using `clearTimeout`.
```


#### Example


```ts
_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.
```