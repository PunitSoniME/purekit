---
title: isMap
definition: isMap(value)
description: Checks if a value is a Map object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns true if value is a Map object, else false.
```


#### Example


```ts
_.isMap(new Map());
// => true

_.isMap(new Set());
// => false

_.isMap({});
// => false
```