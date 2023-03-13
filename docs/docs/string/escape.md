---
title: escape
definition: 
description: Escapes special characters in a string to prevent cross-site scripting (XSS) attacks.
---


#### Arguments


```bash
{string} str - The string to escape.
```


#### Returns


```bash
{string} - The escaped string.
```


#### Example


```ts
const str = 'This is a <script>alert("XSS");</script> attack.';
```