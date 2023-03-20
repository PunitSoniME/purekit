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
toString('Hello');
// => 'Hello'

toString(123);
// => '123'

toString(null);
// => ''

toString(undefined);
// => ''

toString(-0);
// => '-0'

toString(0);
// => '0'
```