---
title: reduce
definition: 
description: Reduces a collection to a single value by iterating over the elements of the collection.
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
reduce([1, 2, 3], (acc, n) => acc + n); // Returns: 6@examplereduce( { a: 1, b: 2, c: 1 }, (result, value, key) => {   (result[value] || (result[value] = [])).push(key);   return result; }, {});
```