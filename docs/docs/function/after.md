---
title: after
definition: after(times, fn)
description: Creates a function that invokes `fn` once it's called `times` times or more.
---


#### Arguments


```bash
{number} times - The number of times `fn` must be called before it is executed.
{Function} fn - The function to be executed.
```


#### Returns


```bash
{*} - Returns the new debounced function.
```


#### Example


```ts
function greet(name) {
  console.log('Hello, ' + name + '!');
}
const greetAfterThree = after(3, greet);
greetAfterThree('Alice'); // nothing happens
greetAfterThree('Bob');   // nothing happens
greetAfterThree('Cathy'); // logs 'Hello, Cathy!'
```