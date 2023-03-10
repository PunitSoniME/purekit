---
title: 'difference'
definition: 'difference(array, [values])'
description: 'Creates an array of unique values that are included in the first given array and not included in the rest of the given arrays.'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
- array (Array): The array to inspect.
- [values] (...*): The values to exclude.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
- (Array): Returns the new array of filtered values.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { difference } from 'alt-lodash';

difference([2, 1], [2, 3]);
// => [1]
```
