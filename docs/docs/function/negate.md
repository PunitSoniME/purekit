---
title: negate
definition: 
description: Returns a function that negates the result of the given function.
---


#### Arguments


```bash
{Function} func - The function to negate.
```


#### Returns


```bash

```


#### Example


```ts
function isEven(num) {  return num % 2 === 0;}const isOdd = negate(isEven);isEven(2); // => trueisOdd(2);  // => falseisEven(3); // => falseisOdd(3);  // => true
```