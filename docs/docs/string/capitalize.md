---
title: capitalize
definition: capitalize([str = ''])
description: Capitalizes the first letter of a string.
---


#### Arguments


```bash
{string} str - The string to capitalize.
```


#### Returns


```bash
{string} - The capitalized string.
```


#### Example


```ts
const str1 = 'foo';
const str2 = 'BAR';
const str3 = 'hElLo WoRlD';

_.capitalize(str1);
// => 'Foo'

_.capitalize(str2);
// => 'Bar'

_.capitalize(str3);
// => 'Hello world'
```