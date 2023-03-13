---
title: sleep
definition: 
description: Pauses the execution for a specified number of milliseconds.
---


#### Arguments


```bash
{number} [milliseconds=1000] - The number of milliseconds to wait before resolving the Promise.
```


#### Returns


```bash
{Promise} - A Promise that resolves after the specified number of milliseconds have passed.
```


#### Example


```ts
await sleep(); // waits for 1000 milliseconds before continuing executionawait sleep(5000); // waits for 5000 milliseconds before continuing execution
```