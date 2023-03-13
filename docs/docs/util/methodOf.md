---
title: methodOf
definition: 
description: Creates a function that invokes the method at `path` of a given object.
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const obj = {  foo: {    bar: (a, b) => a + b  }};const barMethod = methodOf(obj)(['foo', 'bar']);console.log(barMethod(1, 2)); // Output: 3
```