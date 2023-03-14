---
title: isPlainObject
definition: 
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
isPlainObject({}) // trueisPlainObject({ foo: 'bar' }) // trueisPlainObject(Object.create(null)) // trueisPlainObject(new Object()) // trueisPlainObject(new Date()) // falseisPlainObject(Math) // falseisPlainObject(/regexp/) // falseisPlainObject(null) // falseisPlainObject(123) // falseisPlainObject('abc') // falseisPlainObject(['a', 'b', 'c']) // falseisPlainObject(function() {}) // false
```