---
title: isWeakMap
definition: isWeakMap(value)
description: Checks if a value is a WeakMap object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a WeakMap, else `false`.
```


#### Example


```ts
isWeakMap(new WeakMap());
// => true

isWeakMap(new Map());
// => false
```