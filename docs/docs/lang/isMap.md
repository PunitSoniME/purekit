---
title: isMap
definition: 
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
isMap(new Map()); // trueisMap(new Set()); // falseisMap({}); // false
```