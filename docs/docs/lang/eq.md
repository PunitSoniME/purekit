---
title: eq
definition: 
description: Checks if two values are equivalent, based on the `Object.is` method.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash

```


#### Example


```ts
eq(NaN, NaN); // => trueeq(1, 1); // => trueeq(1, '1'); // => falseeq({}, {}); // => falseeq([], []); // => false
```