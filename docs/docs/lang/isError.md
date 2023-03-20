---
title: isError
definition: isError(value)
description: Checks if a value is an error object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is an error object, else `false`.
```


#### Example


```ts
isError(new Error('Something went wrong'));
// => true

isError('Error');
// => false
```