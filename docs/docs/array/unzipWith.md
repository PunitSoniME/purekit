---
title: unzipWith
definition: 
description: This method is like `unzip` except that it accepts `iteratee` to specify how regrouped values should be combined.
---


#### Arguments


```bash
{any[][]} array - The array of grouped elements to process.
{Function} [predicate = identity] - The iteratee to combine regrouped values.
```


#### Returns


```bash
{any[]} - Returns the new array of regrouped elements.
```


#### Example


```ts
const zipped = zip(['a', 'b'], [1, 2], [true, false]);
```