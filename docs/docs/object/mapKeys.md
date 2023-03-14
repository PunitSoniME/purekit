---
title: mapKeys
definition: 
description: Creates an object with the same values as the original, but with new keys generated
---


#### Arguments


```bash
{Object} object - The object to map.
{Function} iteratee - The mapping function.
```


#### Returns


```bash
{Object} - The new object with mapped keys.
```


#### Example


```ts
const users = {  john: { age: 23 },  jane: { age: 31 },  jack: { age: 27 }};const uppercaseKeys = mapKeys(users, (value, key) => key.toUpperCase());console.log(uppercaseKeys);
```