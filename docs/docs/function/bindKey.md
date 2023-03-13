---
title: bindKey
definition: 
description: Creates a function that invokes the method at `object[method]` with `args` and the `this` binding of `object`.
---


#### Arguments


```bash
{Object} object - The object to bind the `method` to.
{string} method - The name of the method to bind.
{...*} [args] - The arguments to be partially applied.
```


#### Returns


```bash

```


#### Example


```ts
const john = {  name: 'John Doe',  greet(greeting: string, punctuation: string) {    return `${greeting} ${this.name}${punctuation}`;  }};const sayHelloToJohn = bindKey(john, 'greet', 'Hello');sayHelloToJohn('!'); // => 'Hello John Doe!'
```