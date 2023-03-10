---
title: 'concat'
definition: 'concat(array, [values])'
description: 'Concatenates two or more arrays into a new array'
---

<p class="pl-2 mb-2 text-violet-700 font-semibold">Arguments</p>

```bash
array (Array): The array to process.
[values] (...*): The values to concatenate.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Returns</p>

```bash
(Array): Returns the new concatenated array.
```

<p class="pl-2 mb-2 text-violet-700 font-semibold">Example</p>

```ts
import { concat } from 'alt-lodash';

var array = [1];
var other = concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```
