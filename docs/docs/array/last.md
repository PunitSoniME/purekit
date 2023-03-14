---
title: 'last'
definition: "last{Array}"
description: 'Returns the last element of an array.'
---

#### Arguments

```bash
{Array} array - The array to query.
```

#### Returns

```bash
{*} - Returns the last element of the array.
```

#### Example

```ts
import { last } from 'alt-lodash';

last([1, 2, 3])
// => 3

last([])
// => undefined
```
