---
title: cloneWith
definition: cloneWith(value, customizer)
description: Creates a deep copy of the input value and applies a customizer function to each property.
---


#### Arguments


```bash
{*} value - The input value to clone.
{function} customizer - A function that takes a value and returns a new value, or `undefined` to use the default cloning behavior.
```


#### Returns


```bash
{*} - A deep copy of the input value with the customizer function applied to each property.
```


#### Example


```ts
function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(false);
  }
}
 
var el = cloneWith(document.body, customizer);
 
console.log(el === document.body);
// => false

console.log(el.nodeName);
// => 'BODY'

console.log(el.childNodes.length);
// => 0
```