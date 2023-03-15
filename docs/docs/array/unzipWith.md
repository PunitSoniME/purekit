---
title: unzipWith
definition: unzipWith(array, [iteratee = identity])
description: This method is like `unzip` except that it accepts `iteratee` to specify how regrouped values should be combined.
---


#### Arguments


```bash
{[]} array - The array of grouped elements to process.
{Function} [predicate = identity] - The iteratee to combine regrouped values.
```


#### Returns


```bash
{[]} - Returns the new array of regrouped elements.
```


#### Example


```ts
const zipped = zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

const unzipped = unzipWith(zipped, (str: string, num: number, bool: boolean) => `${str}${num}${bool}`; );
// => ['a1true', 'b2false']
```