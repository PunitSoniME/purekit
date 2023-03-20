---
title: isDate
definition: isDate(value)
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
isDate(new Date());
// => true

isDate('2021-09-01T00:00:00.000Z');
// => true

isDate(1630454400000);
// => true

isDate(null);
// => false

isDate(undefined);
// => false

isDate('hello');
// => false
```