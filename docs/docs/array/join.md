---
title: 'join'
definition: "join(array, [joiner] = ',')"
description: 'Joins all elements of an array into a string separated by the specified separator.'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
array (Array) - The array to join.
[joiner=','] (string) - The separator to use when joining the elements.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
string - The string created by joining the array elements.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { join } from 'alt-lodash';

join([1, 2, 3], '-');
// returns '1-2-3'

join(['a', 'b', 'c'], '');
// returns 'abc'
```
