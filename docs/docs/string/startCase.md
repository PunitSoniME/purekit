---
title: startCase
definition: startCase([str = ''])
description: Converts a string to start case (i.e., each word capitalized, with spaces between words).
---


#### Arguments


```bash
{string} str - The string to convert.
```


#### Returns


```bash
{string} - The string in start case.
```


#### Example


```ts
_.startCase('foo_bar_baz');
// => 'Foo Bar Baz'
```