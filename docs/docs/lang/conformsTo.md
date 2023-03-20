---
title: conformsTo
definition: conformsTo(object, source)
description: Checks if the provided object conforms to the source object's properties and values.
---


#### Arguments


```bash
{Object} object - The object to check.
{Object} source - The object of property predicates to conform to.
```


#### Returns


```bash
{boolean} - Returns `true` if object conforms, else `false`.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };

conformsTo(object, { 'b': (n) => n > 1 }); // => true
conformsTo(object, { 'a': (n) => n > 1 }); // => false
```