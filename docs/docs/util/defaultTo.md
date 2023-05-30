---
title: defaultTo
definition: defaultTo(value, defaultValue)
description: Checks if a value is null, undefined or NaN and returns the default value if it is.
---


#### Arguments


```bash
{*} value - The value to check.
{*} defaultValue - The default value to return if `value` is null, undefined or NaN.
```


#### Returns


```bash
{*} - Returns the `value` or the `defaultValue` if `value` is null, undefined or NaN.
```


#### Example


```ts
_.defaultTo(null, 'default');
// => 'default'

_.defaultTo(undefined, 'default');
// => 'default'

_.defaultTo(NaN, 'default');
// => 'default'

_.defaultTo('hello', 'default');
// => 'hello'
```