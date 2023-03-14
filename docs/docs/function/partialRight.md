---
title: partialRight
definition: 
description: Creates a new function that invokes the given function with the `cachedArgs`
---


#### Arguments


```bash
{Function} func - The function to partially apply arguments to.
{...any} cachedArgs - The arguments to be partially applied to `func`.
```


#### Returns


```bash
{Function} - Returns the new partially applied function.
```


#### Example


```ts
function greet(greeting, name) {  return `${greeting}, ${name}!`;}const sayHelloTo = partialRight(greet, 'Hello');console.log(sayHelloTo('John')); // logs: 'Hello, John!'
```