---
title: isSet
definition: isSet(value)
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
_.isSet(new Set());
// => true

_.isSet(new WeakSet());
// => false

_.isSet({ key: 'value' });
// => false
```