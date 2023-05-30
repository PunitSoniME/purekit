---
title: isElement
definition: isElement(value)
description: Determines whether the given value is a DOM element.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a DOM element, `false` otherwise.
```


#### Example


```ts
_.isElement(document.createElement('div'));
// => true

_.isElement(document.createTextNode('hello'));
// => false
```