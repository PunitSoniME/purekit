---
title: conforms
definition: conforms(source)
description: Creates a function that checks if an object conforms to the specified object properties and values.
---


#### Arguments


```bash
{Object} object - The object of property predicates.
```


#### Returns


```bash
{Function} - The new function.
```


#### Example


```ts
const func = _.conforms({x: x => x > 5, y: y => y < 10});

func({x: 10, y: 5});
// => true

func({x: 2, y: 15});
// => false
```