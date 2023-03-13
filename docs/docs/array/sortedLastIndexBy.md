---
title: sortedLastIndexBy
definition: 
description: Returns the highest index at which value should be inserted into array
---


#### Arguments


```bash

```


#### Returns


```bash

```


#### Example


```ts
const users = [{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }, { id: 3, name: 'Mary' }];sortedLastIndexBy(users, { id: 2 }, ({ id }) => id); // 3
```