---
title: entriesIn
definition: entriesIn(object)
description: Creates an array of key-value pairs for the given object, including inherited properties.
---


#### Arguments


```bash
{Object} object - The object to convert to pairs.
```


#### Returns


```bash
{Array} - An array of key-value pairs for the given object.
```


#### Example


```ts
const proto = { a: 1 };
const obj = Object.create(proto, {
  b: { value: 2 }
});

_.entriesIn(obj);
// => [['b', 2], ['a', 1]]
```