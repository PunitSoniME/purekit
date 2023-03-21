---
title: tap2
definition: tap2(value, interceptor)
description: Invokes a function with the given value, then returns the value.
---


#### Arguments


```bash
{*} value - The value to provide to interceptor.
{Function} interceptor - The function to invoke.
```


#### Returns


```bash
{*} - Returns value.
```


#### Example


```ts
const data = [1, 2, 3];
const tappedData = tap2(data, (array: number[]) => {
    // Mutate input array.
    array.push(100);
})
 .fn(concat, [4])
 .fn(concat, [5])
 .value();
//  => [1, 2, 3, 100, 4, 5]
```