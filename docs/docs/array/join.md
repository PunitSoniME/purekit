---
title: join
definition: join(array, [joiner] = ',')
description: Joins all elements of an array into a string separated by the specified separator.
---

#### Arguments

```bash
{Array} array - The array to join.
{string} [joiner=','] - The separator to use when joining the elements.
```

#### Returns

```bash
{string} - The string created by joining the array elements.
```

#### Example

```ts
_.join([1, 2, 3], '-');
// => '1-2-3'

_.join(['a', 'b', 'c'], '');
// => 'abc'
```
