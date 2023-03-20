---
title: isNode
definition: isNode(value)
description: Checks if a value is a Node object.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a Node object, else `false`.
```


#### Example


```ts
isNode(document.body);
// => true

isNode(document.createTextNode('Hello'));
// => true

isNode({});
// => false
```