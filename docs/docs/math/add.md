---
title: add
definition: add(augend, addend, ...args)
description: Adds two or more numbers or strings.
---


#### Arguments


```bash
{number | string} augend - The first number or string to be added.
{number | string} addend - The second number or string to be added.
{...(number | string)} args - The rest of the numbers or strings to be added.
```


#### Returns


```bash
{number | string} - The sum of all numbers or concatenated string.
```


#### Example


```ts
_.add(2, 3);
// => 5

_.add('Hello', 'World');
// => 'HelloWorld'

_.add(1, 2, 3, 4);
// => 10
```