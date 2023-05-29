---
title: preventExtensions
definition: preventExtensions(collection)
description: This method prevents new properties from ever being added to an object/array
---


#### Arguments


```bash
{Array} collection - The collection which should be made non-extensible.
```

#### Returns

```bash
{Array} - The collection being made non-extensible.
```

#### Example

```ts
let obj = { a: 1, b: 2 };
_.preventExtensions(obj);

obj.b = 3;
console.log(obj);
//=> { a: 1, b: 3 }

obj.c = 100;
//=> { a: 1, b: 3 }
```