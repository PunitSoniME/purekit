---
title: before
definition: before(times, fn)
description: Executes a function a specified number of times and returns the result of the last execution.
---


#### Arguments


```bash
{number} times - The number of times to execute the function.
{Function} fn - The function to be executed.
```


#### Returns


```bash
{Function} - A function that executes the input function the specified number of times.
```


#### Example


```ts
const multiplyByTwo = (x) => x * 2;
const executeThreeTimes = _.before(3, multiplyByTwo);

// Call the function multiple times:
executeThreeTimes(3);
// => 6

executeThreeTimes(5);
// => 6

executeThreeTimes(2);
// => 6
```