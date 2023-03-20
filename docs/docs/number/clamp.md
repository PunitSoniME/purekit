---
title: clamp
definition: clamp(number, lower, upper)
description: Clamps the given number between the given lower and upper bounds.
---


#### Arguments


```bash
{number} number - The number to clamp.
{number} lower - The lower bound for the clamped value.
{number} upper - The upper bound for the clamped value.
```


#### Returns


```bash
{number} - The clamped value.
```


#### Example


```ts
clamp(10, 0, 5);
// => 5

clamp(-10, 0, 5);
// => 0

clamp(3, 0, 5);
// => 3

clamp(-10, -5, undefined);
// => -5
```