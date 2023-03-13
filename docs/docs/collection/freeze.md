---
title: freeze
definition: 
description: A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
let obj = { a: 1, b: 2 };freeze(obj);obj.b = 3;console.log(obj);
```