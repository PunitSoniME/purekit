---
title: isDate
definition: 
description: Determines whether the given value is a valid Date object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a valid Date object, `false` otherwise.
```


#### Example


```ts
isDate(new Date()); // returns trueisDate('2021-09-01T00:00:00.000Z'); // returns trueisDate(1630454400000); // returns trueisDate(null); // returns falseisDate(undefined); // returns falseisDate('hello'); // returns false
```