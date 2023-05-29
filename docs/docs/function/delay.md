---
title: delay
definition: delay(fn, timer, [args])
description: Invokes a function only after a certain amount of time has passed since the last time it was called.
---


#### Arguments


```bash
{Function} fn - The function to debounce.
{number} timer - The number of milliseconds to wait before invoking the function.
{...any} args - Additional arguments to pass to the function.
```


#### Returns


```bash
{number} - A timer ID that can be used to cancel the debounce with `clearTimeout`.
```


#### Example


```ts
_.defer(console.log, 'a'), console.log('b');
// => logs 'b' then 'a'
```