---
title: 'difference'
description: 'difference method'
---

```ts
difference(array, [values])
```

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
