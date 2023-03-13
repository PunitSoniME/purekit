---
title: isSet
definition: 
description: Checks if a value is a Set.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash

```


#### Example


```ts
isSet(new Set()); // => trueisSet(new WeakSet()); // => falseisSet({ key: 'value' }); // => false
```