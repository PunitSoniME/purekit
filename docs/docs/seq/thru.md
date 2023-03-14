---
title: thru
definition: 
description: Passes the given value to a function and returns the result.
---


#### Arguments


```bash
{*} value - The value to pass to the function.
{Function} fn - The function to apply to the value.
```


#### Returns


```bash
{*} - The result of applying the function to the value.
```


#### Example


```ts
const result = thru([1, 2, 3], (arr) => arr.map((x) => x * 2)).filter((x) => x > 3);console.log(result); // [4, 6]
```