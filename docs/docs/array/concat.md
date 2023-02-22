---
title: 'concat'
description: 'concat method'
---

```ts
concat(array, [values])
```

#### Arguments

```bash
- array (Array): The array to process.
- [values] (...*): The values to concatenate.
```

#### Returns

```bash
- (Array): Returns the new concatenated array.
```

#### Example

```ts
import { concat } from 'alt-lodash';

var array = [1];
var other = concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```
