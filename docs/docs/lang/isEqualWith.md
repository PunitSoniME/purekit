---
title: isEqualWith
definition: 
description: Performs a deep comparison between two values to determine if they are equivalent,
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
function compareFunc(objValue, othValue) {  if (Array.isArray(objValue) && Array.isArray(othValue)) {    return objValue.length === othValue.length;  }}const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };const other = { 'a': [{ 'b': 2 }, { 'd': 4 }] };isEqualWith(object, other, compareFunc);
```