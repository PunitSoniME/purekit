---
title: overEvery
definition: 
description: Checks if all of the given predicates return truthy values when invoked with the arguments provided.
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const isEven = n => n % 2 === 0;const isPositive = n => n > 0;const isEvenAndPositive = overEvery([isEven, isPositive]);isEvenAndPositive(4); // trueisEvenAndPositive(5); // false
```