---
title: toInteger
definition: 
description: Converts a value to an integer.
---


#### Arguments


```bash
{*} value - The value to convert.
```


#### Returns


```bash

```


#### Example


```ts
toInteger(3.2); // 3toInteger(-3.8); // -3toInteger('3.2'); // 3toInteger('-3.8'); // -3toInteger('abc'); // 0toInteger(true); // 1toInteger(false); // 0toInteger(null); // 0toInteger(undefined); // 0
```