---
title: curryRight
definition: curryRight(func, [arity = func.length])
description: Creates a function that can be partially applied from the right.
---


#### Arguments


```bash
{Function} func - The function to curry.
```


#### Returns


```bash
{Function} - Returns the new curried function.
```


#### Example


```ts
const greet = (greeting, name) => `${greeting} ${name}`;
const greetGoodbye = _.curryRight(greet)('Goodbye');
greetGoodbye('John');
// => 'Goodbye John'

greetGoodbye('Sarah');
// => 'Goodbye Sarah'

const greetGoodbyeJohn = _.curryRight(greet)('Goodbye', 'John');

greetGoodbyeJohn();
// => 'Goodbye John'
```