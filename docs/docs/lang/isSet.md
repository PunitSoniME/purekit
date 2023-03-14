---
title: isSet
definition: 
description: Checks if a value is a Set.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a Set, else `false`.
```


#### Example


```ts
isSet(new Set()); // => trueisSet(new WeakSet()); // => falseisSet({ key: 'value' }); // => false
```