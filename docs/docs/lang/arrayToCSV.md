---
title: arrayToCSV
definition: arrayToCSV(array, [delimeter = ','])
description: Converts the elements to strings with comma-separated ( default delimiter ) values.
---


#### Arguments


```bash
{Array} array - The input array
{string} [delimiter = ','] - The delimiter to separate
```


#### Returns


```bash
{string} - Returns the concated string separated by default or passed delimiter
```


#### Example


```ts
arrayToCSV([['a', 'b'], ['c', 'd']]);
// => '"a","b"\n"c","d"'

arrayToCSV([['a', 'b'], ['c', 'd']], ';');
// => '"a";"b"\n"c";"d"'
```