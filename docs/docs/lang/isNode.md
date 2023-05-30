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
_.isNode(document.body);
// => true

_.isNode(document.createTextNode('Hello'));
// => true

_.isNode({});
// => false
```