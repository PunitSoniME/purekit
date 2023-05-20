---
title: dayOfYear
definition: dayOfYear(date)
description: Calculates the day of the year for a given date.
---

#### Arguments


```bash
{Date} date - The input date.
```

#### Returns

```bash
{number} - The day of the year.
```


#### Example


```ts
dayOfYear(new Date('1/1/2023'))
//  =>  1

dayOfYear(new Date('1/31/2023'))
//  =>  31

dayOfYear(new Date('2/5/2023'))
//  =>  36
```