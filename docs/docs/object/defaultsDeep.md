---
title: defaultsDeep
definition: defaultsDeep(object, [...sources])
description: Merges the own and inherited enumerable string keyed properties of source objects into the destination object recursively for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
---


#### Arguments


```bash
{Object} destination - The object to merge properties into.
{...Object} sources - The source objects to merge properties from.
```


#### Returns


```bash
{Object} - A new object with the merged properties.
```


#### Example


```ts
const result = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
```