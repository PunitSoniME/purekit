---
title: 'chunk'
description: 'chunk method'
---

```ts
chunk(array, [chunkSize = 1])
```

#### Arguments

```bash
- array (Array): The array to process.
- [chunkSize = 1] (number): The length of each chunk
```

#### Returns

```bash
- (Array): Returns the new array of chunks.
```

#### Example

```ts
import { chunk } from 'alt-lodash';

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//  => [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
//  =>  [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

***
