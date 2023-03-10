---
title: 'chunk'
definition: 'chunk(array, [chunkSize = 1])'
description: 'Creates an array of elements split into groups the length of chunkSize.'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
array (Array): The array to process.
[chunkSize = 1] (number): The length of each chunk
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
(Array): Returns the new array of chunks.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { chunk } from 'alt-lodash';

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//  => [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
//  =>  [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```
