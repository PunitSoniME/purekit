---
title: words
definition: words([str = ''], [pattern =/\w+/g])
description: Splits a string into an array of words based on a given pattern.
---


#### Arguments


```bash
{string} [str = ''] - The string to split into words.
{RegExp | string} [pattern=/\w+/g] - The pattern to match words.
```


#### Returns


```bash
{Array<string>} - An array of words.
```


#### Example


```ts
words('The quick brown fox jumps over the lazy dog');
// => ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

words('apple, banana, cherry', /[^, ]+/g);
// => ['apple', 'banana', 'cherry']
```