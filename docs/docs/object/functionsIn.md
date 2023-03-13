---
title: functionsIn
definition: 
description: Returns an array of all the function names in the given object, including inherited ones.
---


#### Arguments


```bash
{Object} object - The object to search for functions.
```


#### Returns


```bash

```


#### Example


```ts
class Animal {  constructor(name) {    this.name = name;  }  speak() {    console.log(`${this.name} makes a noise.`);  }}class Dog extends Animal {  speak() {    console.log(`${this.name} barks.`);  }}const d = new Dog('Mitzie');const functionNames = functionsIn(d);
```