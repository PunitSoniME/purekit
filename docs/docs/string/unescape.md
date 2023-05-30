---
title: unescape
definition: unescape(str)
description: Converts HTML entities to their corresponding characters.
---


#### Arguments


```bash
{string} str - The string containing HTML entities.
```


#### Returns


```bash
{string} - The string with HTML entities replaced by their corresponding characters.
```


#### Example


```ts
_.unescape('&lt;h1&gt;Hello, World!&lt;/h1&gt;');
// => '<h1>Hello, World!</h1>'

_.unescape("It&#39;s a wonderful life.");
// => "It's a wonderful life."
```