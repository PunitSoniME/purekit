---
title: isArguments
definition: isArguments(value)
description: Determines whether the given value is an `arguments` object.
---


#### Arguments


```bash
{*} value - The item to check.
```


#### Returns


```bash
{boolean} - `true` if the item is an `arguments` object, `false` otherwise.
```


#### Example


```ts
const args = (function() { return arguments; })();
_.isArguments(args);
// => true

const arr = [1, 2, 3];
_.isArguments(arr);
// => false
```