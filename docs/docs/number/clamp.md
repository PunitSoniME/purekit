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
_.clamp(10, 0, 5);
// => 5

_.clamp(-10, 0, 5);
// => 0

_.clamp(3, 0, 5);
// => 3

_.clamp(-10, -5, undefined);
// => -5
```