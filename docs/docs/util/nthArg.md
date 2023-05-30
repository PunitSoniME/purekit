---
title: nthArg
definition: nthArg([idx = 0])
description: Returns a function which will return the nth argument passed to it
---


#### Arguments


```bash
{number} idx - The index of the argument to be returned
```


#### Returns


```bash
{Function} - A function which will return the nth argument passed to it
```


#### Example


```ts
const getSecondArg = _.nthArg(1);
getSecondArg(1, 2, 3);
// => 2

const getThirdArg = _.nthArg(2);
getThirdArg('a', 'b', 'c', 'd');
// => 'c'
```