---
title: isPlainObject
definition: isPlainObject(value)
description: Checks if a value is a plain object, i.e., an object created by the Object constructor
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - Returns `true` if `value` is a plain object, else `false`.
```


#### Example


```ts
_.isPlainObject({});
// => true

_.isPlainObject({ foo: 'bar' });
// => true

_.isPlainObject(Object.create(null));
// => true

_.isPlainObject(new Object());
// => true

_.isPlainObject(new Date());
// => false

_.isPlainObject(Math);
// => false

_.isPlainObject(/regexp/);
// => false

_.isPlainObject(null);
// => false

_.isPlainObject(123);
// => false

_.isPlainObject('abc');
// => false

_.isPlainObject(['a', 'b', 'c']);
// => false

_.isPlainObject(function() {});
// => false
```