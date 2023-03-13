---
title: before
definition: 
description: Creates a function that invokes `fn` with its arguments transformed.
---


#### Arguments


```bash
{Function} fn - The function to wrap.
{number} [arity=fn.length] - The arity of `fn`.
```


#### Returns


```bash

```


#### Example


```ts
const parseIntAry = ary(parseInt, 1);['6', '8', '10'].map(parseIntAry);
```