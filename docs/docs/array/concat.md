---
title: concat
definition: concat(array, [values])
description: Concatenates two or more arrays into a new array.
---

#### Arguments

```bash
{Array} array - The array to process.
{...any[]} restArray - The values to concatenate.
```

#### Returns

```bash
{Array} - Returns the new concatenated array.
```

#### Example

```ts
var array = [1];
var other = concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log{Array};
// => [1]
```
