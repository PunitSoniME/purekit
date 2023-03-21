---
title: upperCase
definition: upperCase([str = ''])
description: Converts a string to title case and removes special characters.
---


#### Arguments


```bash
{string} [str = ''] - The string to convert to title case.
```


#### Returns


```bash
{string} - The string converted to title case.
```


#### Example


```ts
upperCase('Hello_world');
// => 'HELLO WORLD'

upperCase('life-is_beautiful');
// => 'LIFE IS BEAUTIFUL'
```