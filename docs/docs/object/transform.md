---
title: transform
definition: transform(object, [iteratee = identity], [accumulator])
description: Transforms a collection by iterating over its elements and applying a transformation function.
---


#### Arguments


```bash
{Array | Object} collection - The collection to be transformed. Can be an array or an object with string keys.
{function} [iteratee = identity] - The transformation function to be applied to each element in the collection. Takes four parameters: the current `result`, the current `value`, the current `key`, and the entire `collection`.
{*} [accumulator] - The initial value for the result. Defaults to `undefined`.
```


#### Returns


```bash
{*} - The transformed collection of the same type as the `accumulator` parameter.
```


#### Example


```ts
_.transform([2, 3, 4], function(result, n) {
    result.push(n *= n);
return n % 2 == 0
}, []);
// => [4, 9]

_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key)
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
```