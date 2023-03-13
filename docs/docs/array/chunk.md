---
title: 'chunk'
definition: 'chunk(array, [chunkSize = 1])'
description: 'Creates an array of elements split into groups the length of chunkSize.'
---

#### Arguments

```bash
{T[]} array - The array to process.
{number} [chunkSize=1] - The length of each chunk
```

#### Returns

```bash
(Array) - Returns the new array of chunks.
```

#### Example

```ts
import { chunk } from 'alt-lodash';

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//  => [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
//  =>  [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```
