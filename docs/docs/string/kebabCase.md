---
title: kebabCase
definition: kebabCase([str = ''])
description: Converts a string to kebab case.
---


#### Arguments


```bash
{string} [str = ''] - The string to convert.
```


#### Returns


```bash
{string} - The kebab case string.
```


#### Example


```ts
const str = 'This is a Test String';
_.kebabCase(str);
// => 'this-is-a-test-string'
```