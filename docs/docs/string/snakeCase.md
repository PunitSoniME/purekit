---
title: snakeCase
definition: snakeCase([str = ''])
description: Converts a string to snake case.
---


#### Arguments


```bash
{string} [str = ''] - The string to convert.
```


#### Returns


```bash
{string} - The snake case version of the input string.
```


#### Example


```ts
_.snakeCase('some text');
// => 'some_text'

_.snakeCase('some-mixed_string With spaces_underscores-and-hyphens');
// => 'some_mixed_string_with_spaces_underscores_and_hyphens'

_.snakeCase('AllThe-small Things');
// => 'all_the_small_things'
```