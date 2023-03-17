---
title: compact
definition: compact(array)
description: Creates a new array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
---

#### Arguments

```bash
{Array} array - The array to compact.
```

#### Returns

```bash
{Array} - Returns the new array of filtered values.
```

#### Example

```ts
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
