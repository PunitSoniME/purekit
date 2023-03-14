---
title: isArguments
definition: 
description: Determines whether the given item is an `arguments` object.
---


#### Arguments


```bash
{*} item - The item to check.
```


#### Returns


```bash
{boolean} - `true` if the item is an `arguments` object, `false` otherwise.
```


#### Example


```ts
const args = (function() { return arguments; })();isArguments(args); // returns trueconst arr = [1, 2, 3];isArguments(arr); // returns false
```