---
title: isBoolean
definition: 
description: Determines whether the given value is a boolean.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a boolean, `false` otherwise.
```


#### Example


```ts
isBoolean(true); // returns trueisBoolean(false); // returns trueisBoolean(0); // returns falseisBoolean('true'); // returns falseisBoolean(null); // returns false
```