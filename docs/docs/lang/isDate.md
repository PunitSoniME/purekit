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
_.isDate(new Date());
// => true

_.isDate('2021-09-01T00:00:00.000Z');
// => true

_.isDate(1630454400000);
// => true

_.isDate(null);
// => false

_.isDate(undefined);
// => false

_.isDate('hello');
// => false
```