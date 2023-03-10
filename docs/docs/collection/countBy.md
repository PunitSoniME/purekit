---
title: 'countBy'
description: 'countBy method'
---

```ts
countBy(collection, [iteratee = identity])
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
collection (Array|Object): The collection to iterate over.
[iteratee = identity] (Function): The iteratee to transform keys.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
(Object): Returns the composed aggregate object.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { countBy } from 'alt-lodash';

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `property` iteratee shorthand.
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
