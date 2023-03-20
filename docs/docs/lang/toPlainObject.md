---
title: toPlainObject
definition: toPlainObject(value)
description: Converts `value` to a plain object with its own enumerable properties.
---


#### Arguments


```bash
{*} value - The value to convert.
```


#### Returns


```bash
{Object} - The converted plain object.
```


#### Example


```ts
toPlainObject({ a: 1, b: 2 });
// => { a: 1, b: 2 }

toPlainObject(new Map([['a', 1], ['b', 2]]));
// => { a: 1, b: 2 }

toPlainObject([1, 2, 3]);
// => { '0': 1, '1': 2, '2': 3 }
```