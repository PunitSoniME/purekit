---
title: add
definition: 
description: Adds two or more numbers or strings.
---


#### Arguments


```bash
{number|string} augend - The first number or string to be added.
{number|string} addend - The second number or string to be added.
{...(number|string)} restNumbers - The rest of the numbers or strings to be added.
```


#### Returns


```bash
{number} - The sum of all numbers or concatenated string.
```


#### Example


```ts
add(2, 3); // returns 5add('Hello', 'World'); // returns 'HelloWorld'add(1, 2, 3, 4); // returns 10
```