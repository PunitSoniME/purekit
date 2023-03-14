---
title: over
definition: 
description: Creates a function that invokes each function in `array` with the
---


#### Arguments


```bash
{Array} array - The array of functions to iterate over.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const func1 = x => x * 2;const func2 = x => x + 2;const func3 = x => x - 2;const funcs = [func1, func2, func3];const overFunc = over(funcs);console.log(overFunc(5)); // [10, 7, 3]
```