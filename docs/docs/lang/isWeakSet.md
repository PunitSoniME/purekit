---
title: isWeakSet
definition: isWeakSet(value)
description: Checks if a value is a WeakSet.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a WeakSet, else `false`.
```


#### Example


```ts
_.isWeakSet(new WeakSet());
// => true

_.isWeakSet(new Set());
// => false

_.isWeakSet({});
// => false
```