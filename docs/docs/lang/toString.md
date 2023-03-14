---
title: toString
definition: 
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
toString('Hello') // returns 'Hello'toString(123) // returns '123'toString(null) // returns ''toString(undefined) // returns ''toString(-0) // returns '-0'toString(0) // returns '0'
```