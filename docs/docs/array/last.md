---
title: 'last'
definition: "last(array)"
description: 'Returns the last element of an array.'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
array - The array to query.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
{*} - Returns the last element of the array.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { last } from 'alt-lodash';

last([1, 2, 3])
// => 3

last([])
// => undefined
```
