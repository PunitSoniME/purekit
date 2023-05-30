---
title: forIn
definition: forIn(object, [iteratee = identity])
description: Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property.
---


#### Arguments


```bash
{Object} object - The object to iterate over.
{Function} [iteratee = identity] - The function to invoke per iteration.
```


#### Returns


```bash
{Object} - Returns object.
```


#### Example


```ts
const object = { 'a': 1, 'b': 2 };
_.forIn(object, function(value, key) {
  console.log(key);
});
// => 'a' (iteration order is not guaranteed)
// => 'b' (iteration order is not guaranteed)

_.forIn(object, function(value, key) {
  object[key] = value * 2;
});
console.log(object);
// => { 'a': 2, 'b': 4 }
```