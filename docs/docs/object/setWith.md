---
title: setWith
definition: 
description: This method is like `set` except that it accepts `customizer` which is invoked to produce the
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const object = { 'a': [{ 'b': { 'c': 3 } }] };setWith(object, '[0].a.b.c', 4, (value) => value === 3 ? 1 : value);
```