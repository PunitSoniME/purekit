---
title: 'countBy'
description: 'countBy method'
---

```ts
countBy(collection, [iteratee = identity])
```

#### Arguments

```bash
collection (Array|Object): The collection to iterate over.
[iteratee = identity] (Function): The iteratee to transform keys.
```

#### Returns

```bash
(Object): Returns the composed aggregate object.
```

#### Example

```ts
import { countBy } from 'alt-lodash';

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `property` iteratee shorthand.
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
