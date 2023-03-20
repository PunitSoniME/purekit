---
title: random
definition: random([lower=0], [upper = 1])
description: Returns a random number within the specified range. If only one argument is provided, the number will be between 0 and the given number.
---


#### Arguments


```bash
{number} [lower = 0] - The lower bound of the range (inclusive if `upper` is defined).
{number | boolean} [upper = 1] - The upper bound of the range (exclusive if defined), or a boolean flag indicating whether to return a floating-point number.
```


#### Returns


```bash
{number} - A random number within the specified range.
```


#### Example


```ts
random(10);
// => a random integer between 0 and 9

random(1, 11);
// => a random integer between 1 and 10

random(true);
// => a random floating-point number between 0 and 1

random(3, 2);
// => a random floating-point number between 2 and 3
```