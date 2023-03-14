---
title: toPairsIn
definition: 
description: Creates an array of key-value pairs for the given object, including inherited properties.
---


#### Arguments


```bash
{object} object - The object to convert to pairs.
```


#### Returns


```bash

```


#### Example


```ts
const proto = { a: 1 };const obj = Object.create(proto, {  b: { value: 2 }});const result = toPairsIn(obj);console.log(result); // [['b', 2], ['a', 1]]
```