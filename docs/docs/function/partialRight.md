---
title: partialRight
definition: partialRight(func, [partials])
description: Creates a new function that invokes the given function with the `cachedArgs` and the additional arguments provided when the new function is called.
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
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const sayHelloTo = _.partialRight(greet, 'Hello');

sayHelloTo('John');
// => 'Hello, John!'
```