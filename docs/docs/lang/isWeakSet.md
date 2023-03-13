---
title: isWeakSet
definition: 
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
isWeakSet(new WeakSet()); // => trueisWeakSet(new Set()); // => falseisWeakSet({}); // => false
```