---
title: 'difference'
definition: 'difference(array, [values])'
description: 'Creates an array of unique values that are included in the first given array and not included in the rest of the given arrays.'
---

#### Arguments

```bash
{T[] | null | undefined} array - The array to inspect.
{...T[][]} restArray - The values to exclude.
```

#### Returns

```bash
{T[]} - Returns the new array of filtered values.
```

#### Example

```ts
import { difference } from 'alt-lodash';

difference([2, 1], [2, 3]);
// => [1]
```
