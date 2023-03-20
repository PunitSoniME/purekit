---
title: isMatch
definition: isMatch(value)
description: Checks if an object matches a source object, using a customizer function.
---


#### Arguments


```bash
{Object} object - The object to check for a match.
{Object} source - The object to match against.
```


#### Returns


```bash
{boolean} - Returns true if the object matches the source object, else false.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2, 'c': 3 };
isMatch(object, { 'b': 2 });
// => true

isMatch(object, { 'b': 1 });
// => false
```