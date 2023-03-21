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

const result1 = camelCase(str1);
// => 'fooBar'

const result2 = camelCase(str2);
// => 'helloWorld'

const result3 = camelCase(str3);
// => 'fooBar'

const result4 = camelCase(str4);
// => 'fooBar'
```