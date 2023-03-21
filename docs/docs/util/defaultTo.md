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
defaultTo(null, 'default');
// => 'default'

defaultTo(undefined, 'default');
// => 'default'

defaultTo(NaN, 'default');
// => 'default'

defaultTo('hello', 'default');
// => 'hello'
```