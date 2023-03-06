---
title: 'join'
definition: "join(array, [joiner] = ',')"
description: 'Joins all elements of an array into a string separated by the specified separator.'
---

#### Arguments

```bash
array (Array) - The array to join.
[joiner=','] (string) - The separator to use when joining the elements.
```

#### Returns

```bash
string - The string created by joining the array elements.
```

#### Example

```ts
import { join } from 'alt-lodash';

join([1, 2, 3], '-');
// returns '1-2-3'

join(['a', 'b', 'c'], '');
// returns 'abc'
```
