---
title: create
definition: create(prototype, [properties])
description: Creates a new object with the specified prototype and properties. If the properties argument is not provided, an empty object with the given prototype is created.
---


#### Arguments


```bash
{Object} prototype - The prototype of the newly created object.
{Object} [properties = null] - The properties of the newly created object.
```


#### Returns


```bash
{Object} - A new object with the specified prototype and properties.
```


#### Example


```ts
const prototype = { a: 1 };

_.create(prototype);
// => {}

_.create(prototype, { b: 2 });
// => { b: 2 }

_.create(prototype, { a: 3, b: 4 });
// => { a: 3, b: 4 }
```