---
title: 'difference'
definition: 'difference(array, [values])'
description: 'Creates an array of unique values that are included in the first given array and not included in the rest of the given arrays.'
---

#### Arguments

```bash
- array (Array): The array to inspect.
- [values] (...*): The values to exclude.
```

#### Returns

```bash
- (Array): Returns the new array of filtered values.
```

#### Example

```ts
import { difference } from 'alt-lodash';

difference([2, 1], [2, 3]);
// => [1]
```
