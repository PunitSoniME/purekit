---
title: toString
definition: toString(value)
description: Converts a value to a string.
---


#### Arguments


```bash
{*} value - The value to convert to a string.
```


#### Returns


```bash
{string} - The string representation of the given value.
```


#### Example


```ts
_.toString('Hello');
// => 'Hello'

_.toString(123);
// => '123'

_.toString(null);
// => ''

_.toString(undefined);
// => ''

_.toString(-0);
// => '-0'

_.toString(0);
// => '0'
```