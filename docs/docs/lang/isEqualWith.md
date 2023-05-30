---
title: isEqualWith
definition: isEqualWith(value, other, [customizer])
description: Performs a deep comparison between two values to determine if they are equivalent,
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
{Function} customizer - The function to customize value comparisons.
```


#### Returns


```bash
{boolean} - Returns `true` if the values are equivalent, else `false`.
```


#### Example


```ts
function compareFunc(objValue, othValue) {
  if (Array.isArray(objValue) && Array.isArray(othValue)) {
    return objValue.length === othValue.length;
  }
}
const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
const other = { 'a': [{ 'b': 2 }, { 'd': 4 }] };

_.isEqualWith(object, other, compareFunc);
// => true

_.isEqualWith(object, other, (objValue, othValue) => {
  if (Array.isArray(objValue) && Array.isArray(othValue)) {
    return objValue.length === othValue.length;
  }
});
// => true
```