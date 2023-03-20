---
title: isSymbol
definition: isSymbol(value)
description: Checks if a given value is a symbol.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if the value is a symbol, else `false`.
```


#### Example


```ts
isSymbol(Symbol.iterator);
// => true

isSymbol('abc');
// => false
```