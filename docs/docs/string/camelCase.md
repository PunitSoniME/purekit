---
title: camelCase
definition: camelCase([str = ''])
description: Converts a string to camelCase.
---


#### Arguments


```bash
{string} [str=''] - The string to convert to camelCase.
```


#### Returns


```bash
{string} - The camelCased string.
```


#### Example


```ts
const str1 = 'foo_bar';
const str2 = 'hello-world';
const str3 = 'Foo Bar';
const str4 = 'FOO-BAR';

_.camelCase(str1);
// => 'fooBar'

_.camelCase(str2);
// => 'helloWorld'

_.camelCase(str3);
// => 'fooBar'

_.camelCase(str4);
// => 'fooBar'
```