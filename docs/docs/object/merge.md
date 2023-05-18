---
title: merge
definition: merge(object, [sources])
description: Merges multiple objects into a single object. The resulting object will have the same properties as the input objects, with values from later objects overwriting earlier ones if there are conflicts.
---


#### Arguments


```bash
{Object} object - The object to merge other objects into.
{...Object} sources - Additional objects to merge into the first object.
```


#### Returns


```bash
{Object} - The merged object.
```


#### Example


```ts
const object1 = { a: [{ b: 2 }, { d: 4 }] };
const object2 = { a: [{ c: 3 }, { e: 5 }] };
const result = merge(object1, object2);
console.log(result);
// => { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }

const object3 = { a: 1, b: 2 };
const object4 = { b: 3, c: 4 };
const result2 = merge(object3, object4);
console.log(result2);
// => { a: 1, b: 3, c: 4 }
```