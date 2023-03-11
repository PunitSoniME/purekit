---
title: 'countBy'
definition: 'countBy(collection, [iteratee = identity])'
description: 'Groups the elements in the array by a given criterion, and counts the number of elements in each group.'
---

#### Arguments

```bash
collection (Array|Object): The collection to iterate over.
[iteratee = identity] (Function): The iteratee to transform keys.
```

#### Returns

```bash
(Object): An object with keys representing the group and values representing the count of elements in that group.
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
