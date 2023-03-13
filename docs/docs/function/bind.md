---
title: bind
definition: 
description: Creates a new function that, when called, has its `this` keyword set to the provided context, with a given sequence of arguments preceding any provided when the new function was called.
---


#### Arguments


```bash
{Function} fn - The function to bind `this` to the provided context.
{Object} ctx - The context to bind `this` to.
{...any} boundArgs - The sequence of arguments to be bound to the new function.
```


#### Returns


```bash

```


#### Example


```ts
const user = {  name: 'Alice',  sayHi(greeting) {    console.log(`${greeting}, my name is ${this.name}.`);  }};const sayHiToAlice = bind(user.sayHi, user, 'Hello');sayHiToAlice(); // logs "Hello, my name is Alice."const add = (x, y) => x + y;const addTen = bind(add, null, 10);console.log(addTen(5)); // logs 15
```