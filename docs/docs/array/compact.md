---
title: 'compact'
definition: 'compact(array)'
description: 'Creates a new array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
array (Array): The array to compact.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
(Array): Returns the new array of filtered values.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { compact } from 'alt-lodash';

compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
