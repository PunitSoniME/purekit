---
title: 'last'
definition: 'last(array)'
description: 'Returns the last element of an array.'
---

[alt-lodash](README.md) / Exports

# alt-lodash

## Table of contents

### Functions

- [chunk](modules.md#chunk)
- [compact](modules.md#compact)
- [concat](modules.md#concat)
- [difference](modules.md#difference)
- [differenceBy](modules.md#differenceby)
- [differenceWith](modules.md#differencewith)
- [drop](modules.md#drop)
- [dropRight](modules.md#dropright)
- [dropRightWhile](modules.md#droprightwhile)
- [dropWhile](modules.md#dropwhile)
- [fill](modules.md#fill)
- [findIndex](modules.md#findindex)
- [findLastIndex](modules.md#findlastindex)
- [first](modules.md#first)
- [flatten](modules.md#flatten)
- [flattenDeep](modules.md#flattendeep)
- [flattenDepth](modules.md#flattendepth)
- [fromPairs](modules.md#frompairs)
- [head](modules.md#head)
- [indexOf](modules.md#indexof)
- [initial](modules.md#initial)
- [intersection](modules.md#intersection)
- [intersectionBy](modules.md#intersectionby)
- [intersectionWith](modules.md#intersectionwith)
- [join](modules.md#join)
- [last](modules.md#last)
- [lastIndexOf](modules.md#lastindexof)
- [nth](modules.md#nth)
- [pull](modules.md#pull)
- [pullAll](modules.md#pullall)
- [pullAllBy](modules.md#pullallby)
- [pullAllWith](modules.md#pullallwith)
- [pullAt](modules.md#pullat)
- [remove](modules.md#remove)
- [reverse](modules.md#reverse)
- [slice](modules.md#slice)
- [sortedIndex](modules.md#sortedindex)
- [sortedIndexBy](modules.md#sortedindexby)
- [sortedIndexOf](modules.md#sortedindexof)
- [sortedLastIndex](modules.md#sortedlastindex)
- [sortedLastIndexBy](modules.md#sortedlastindexby)
- [sortedLastIndexOf](modules.md#sortedlastindexof)
- [sortedUniq](modules.md#sorteduniq)
- [sortedUniqBy](modules.md#sorteduniqby)
- [tail](modules.md#tail)
- [take](modules.md#take)
- [takeRight](modules.md#takeright)
- [takeRightWhile](modules.md#takerightwhile)
- [takeWhile](modules.md#takewhile)
- [union](modules.md#union)
- [unionBy](modules.md#unionby)
- [unionWith](modules.md#unionwith)
- [uniq](modules.md#uniq)
- [uniqBy](modules.md#uniqby)
- [uniqWith](modules.md#uniqwith)
- [unshift](modules.md#unshift)
- [unzip](modules.md#unzip)
- [unzipWith](modules.md#unzipwith)
- [without](modules.md#without)
- [xor](modules.md#xor)
- [xorBy](modules.md#xorby)
- [xorWith](modules.md#xorwith)
- [zip](modules.md#zip)
- [zipObject](modules.md#zipobject)
- [zipWith](modules.md#zipwith)

## Functions

### chunk

▸ **chunk**<`T`\>(`array`, `chunkSize?`, `cache?`): `T`[][]

Creates an array of elements split into groups the length of chunkSize.

**`Since`**

1.0.0

**`Example`**

```ts
chunk([1, 2, 3, 4, 5], 2);
// returns [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], 3);
// returns [[1, 2, 3], [4, 5]]

chunk([1, 2, 3, 4, 5], 0);
// returns []
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to process. |
| `chunkSize?` | `number` | `1` | The length of each chunk. |
| `cache?` | `T`[][] | `[]` | The array to store the chunked elements. |

#### Returns

`T`[][]

- The new array of chunks.

#### Defined in

[chunk.ts:23](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/chunk.ts#L23)

___

### compact

▸ **compact**<`T`\>(`array`): `T`[]

Creates a new array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.

**`Since`**

1.0.0

**`Example`**

```ts
const arr = [0, 1, false, 2, '', 3];
const result = compact(arr);
console.log(result);
// expected output: [1, 2, 3]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to compact. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[compact.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/compact.ts#L17)

___

### concat

▸ **concat**<`T`\>(`array`, `...restArray`): `T`[]

Concatenates two or more arrays into a new array

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const result = concat(arr1, arr2, arr3);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The first array to concatenate |
| `...restArray` | `any`[] | The rest of the arrays to concatenate |

#### Returns

`T`[]

- A new array that contains all the elements from the input arrays

#### Defined in

[concat.ts:26](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/concat.ts#L26)

___

### difference

▸ **difference**<`T`\>(`array`, `...restArray`): `T`[]

Creates an array of unique values that are included in the first given array and not included in the rest of the given arrays.

**`Since`**

1.0.0

**`Example`**

```ts
difference([2, 1], [2, 3]); // -> [1]
difference([1, 2, 3], [2, 3, 4], [3, 4, 5]); // -> [1]
difference([1, 2, 3], [4, 5, 6]); // -> [1, 2, 3]
difference([], [1, 2, 3]); // -> []
difference(null, [1, 2, 3]); // -> []
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| ``null`` \| `T`[] | The array to inspect. |
| `...restArray` | `T`[][] | The arrays to exclude values. |

#### Returns

`T`[]

- The new array of filtered values.

#### Defined in

[difference.ts:19](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/difference.ts#L19)

___

### differenceBy

▸ **differenceBy**<`T`\>(`array1`, `array2`, `iteratee`): `T`[]

Returns the difference between the first array and other arrays or values, using a comparator function to compare values.

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `iteratee` | `any` | The iteratee invoked per element to generate the criterion by which uniqueness is computed. If a string is provided instead, it will be used to create a property accessor function. If iteratee is not provided, it defaults to identity. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[interface/IDifferenceBy.ts:2](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L2)

▸ **differenceBy**<`T`\>(`array1`, `array2`, `array3`, `iteratee`): `T`[]

Returns the difference between the first array and other arrays or values, using a comparator function to compare values.

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `iteratee` | `any` | The iteratee invoked per element to generate the criterion by which uniqueness is computed. If a string is provided instead, it will be used to create a property accessor function. If iteratee is not provided, it defaults to identity. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[interface/IDifferenceBy.ts:3](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L3)

▸ **differenceBy**<`T`\>(`array1`, `array2`, `array3`, `array4`, `iteratee`): `T`[]

Returns the difference between the first array and other arrays or values, using a comparator function to compare values.

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `array4` | `T`[] | - |
| `iteratee` | `any` | The iteratee invoked per element to generate the criterion by which uniqueness is computed. If a string is provided instead, it will be used to create a property accessor function. If iteratee is not provided, it defaults to identity. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[interface/IDifferenceBy.ts:4](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L4)

▸ **differenceBy**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `iteratee`): `T`[]

Returns the difference between the first array and other arrays or values, using a comparator function to compare values.

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `array4` | `T`[] | - |
| `array5` | `T`[] | - |
| `iteratee` | `any` | The iteratee invoked per element to generate the criterion by which uniqueness is computed. If a string is provided instead, it will be used to create a property accessor function. If iteratee is not provided, it defaults to identity. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[interface/IDifferenceBy.ts:5](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L5)

▸ **differenceBy**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `...args`): `T`[]

Returns the difference between the first array and other arrays or values, using a comparator function to compare values.

**`Since`**

1.0.0

**`Example`**

```ts
const arr1 = [2.1, 1.2, 3.3];
const arr2 = [3.4, 2.5];
console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]

const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
const arr4 = [ { 'x': 1 } ];
console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]

const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `array4` | `T`[] | - |
| `array5` | `T`[] | - |
| `...args` | `any` | The values or arrays to exclude. If a string is provided as the last argument, it is used as a property name to extract from each element of the array. If a function is provided as the last argument, it is used to extract a comparison value from each element in the arrays to exclude. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[interface/IDifferenceBy.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L13)

___

### differenceWith

▸ **differenceWith**<`T`\>(`array1`, `array2`, `iteratee`): `T`[]

Returns the difference between the first array and all other arguments using a provided comparator function

**`Since`**

1.0.0

**`Example`**

```ts
const a = [1, 2, 3, 4];
const b = [3, 4];

const result = differenceWith(a, b, (a, b) => a === b);

console.log(result);
// expected output: [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `iteratee` | `any` |

#### Returns

`T`[]

Returns a new array of filtered values

#### Defined in

[interface/IDifferenceBy.ts:2](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L2)

▸ **differenceWith**<`T`\>(`array1`, `array2`, `array3`, `iteratee`): `T`[]

Returns the difference between the first array and all other arguments using a provided comparator function

**`Since`**

1.0.0

**`Example`**

```ts
const a = [1, 2, 3, 4];
const b = [3, 4];

const result = differenceWith(a, b, (a, b) => a === b);

console.log(result);
// expected output: [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `iteratee` | `any` |

#### Returns

`T`[]

Returns a new array of filtered values

#### Defined in

[interface/IDifferenceBy.ts:3](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L3)

▸ **differenceWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `iteratee`): `T`[]

Returns the difference between the first array and all other arguments using a provided comparator function

**`Since`**

1.0.0

**`Example`**

```ts
const a = [1, 2, 3, 4];
const b = [3, 4];

const result = differenceWith(a, b, (a, b) => a === b);

console.log(result);
// expected output: [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `iteratee` | `any` |

#### Returns

`T`[]

Returns a new array of filtered values

#### Defined in

[interface/IDifferenceBy.ts:4](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L4)

▸ **differenceWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `iteratee`): `T`[]

Returns the difference between the first array and all other arguments using a provided comparator function

**`Since`**

1.0.0

**`Example`**

```ts
const a = [1, 2, 3, 4];
const b = [3, 4];

const result = differenceWith(a, b, (a, b) => a === b);

console.log(result);
// expected output: [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `array5` | `T`[] |
| `iteratee` | `any` |

#### Returns

`T`[]

Returns a new array of filtered values

#### Defined in

[interface/IDifferenceBy.ts:5](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L5)

▸ **differenceWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `...args`): `T`[]

Returns the difference between the first array and all other arguments using a provided comparator function

**`Since`**

1.0.0

**`Example`**

```ts
const a = [1, 2, 3, 4];
const b = [3, 4];

const result = differenceWith(a, b, (a, b) => a === b);

console.log(result);
// expected output: [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `array4` | `T`[] | - |
| `array5` | `T`[] | - |
| `...args` | `any` | The arrays of values to exclude |

#### Returns

`T`[]

Returns a new array of filtered values

#### Defined in

[interface/IDifferenceBy.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IDifferenceBy.ts#L13)

___

### drop

▸ **drop**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of `array` with `n` elements dropped from the beginning.

**`Since`**

1.0.0

**`Example`**

```ts
drop([1, 2, 3, 4]); // returns [2, 3, 4]
drop([1, 2, 3, 4], 2); // returns [3, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to query. |
| `n?` | `number` | `1` | The number of elements to drop. |

#### Returns

`T`[]

- Returns the slice of `array`.

#### Defined in

[drop.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/drop.ts#L16)

___

### dropRight

▸ **dropRight**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of an array with `n` elements dropped from the end.

**`Since`**

1.0.0

**`Example`**

```ts
dropRight([1, 2, 3, 4, 5], 2);
// => [1, 2, 3]

dropRight([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to query. |
| `n?` | `number` | `1` | The number of elements to drop from the end. |

#### Returns

`T`[]

- Returns the slice of `array`.

#### Defined in

[dropRight.ts:20](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/dropRight.ts#L20)

___

### dropRightWhile

▸ **dropRightWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a slice of the `array` with elements dropped from the end.
Elements are dropped until `predicate` returns falsey.

**`Since`**

1.0.0

**`Example`**

```ts
dropRightWhile([1, 2, 3, 4], n => n > 2);
// => [1, 2]

dropRightWhile([{ 'user': 'barney', 'active': true }, { 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': false }], o => !o.active);
// => [{ 'user': 'barney', 'active': true }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to inspect. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of `array`.

#### Defined in

[dropRightWhile.ts:25](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/dropRightWhile.ts#L25)

___

### dropWhile

▸ **dropWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a new array with elements dropped until the predicate returns false.

**`Since`**

1.0.0

**`Example`**

```ts
dropWhile([1, 2, 3], n => n < 3); // Returns [3]

dropWhile(['foo', 'bar', 'baz'], str => str.startsWith('f')); // Returns ['bar', 'baz']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of the array.

#### Defined in

[dropWhile.ts:20](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/dropWhile.ts#L20)

___

### fill

▸ **fill**<`T`\>(`array`, `value`, `start?`, `end?`): `T`[]

Fill an array with a specified value from a start index to an end index.

**`Since`**

1.0.0

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
const filledArr = fill(arr, 0, 2, 4);
console.log(filledArr); // Output: [1, 2, 0, 0, 5]

const arr2 = [1, 2, 3, 4, 5];
const filledArr2 = fill(arr2, '*', 1);
console.log(filledArr2); // Output: [1, '*', '*', '*', '*', '*']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array to be filled. |
| `value` | `any` | `undefined` | The value to fill the array with. |
| `start?` | `number` | `0` | The start index to begin filling the array from. |
| `end?` | `number` | `array.length` | The end index to stop filling the array at. |

#### Returns

`T`[]

- A new filled array.

#### Defined in

[fill.ts:24](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/fill.ts#L24)

___

### findIndex

▸ **findIndex**<`T`\>(`array`, `predicate?`, `fromIndex?`): `number`

Returns the index of the first element in the array that satisfies the provided predicate function.

**`Since`**

1.0.0

**`Example`**

```ts
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

findIndex(users, ({ id }) => id === 2);
// => 1

findIndex(users, ({ name }) => name === 'Mary');
// => -1
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T` | `undefined` | The array to search. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration. |
| `fromIndex?` | `number` | `0` | The index to search from. |

#### Returns

`number`

Returns the index of the found element, else -1.

#### Defined in

[findIndex.ts:29](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/findIndex.ts#L29)

___

### findLastIndex

▸ **findLastIndex**<`T`\>(`array`, `predicate?`, `fromIndex?`, `toIndex?`): `number`

Returns the index of the last element in the array that satisfies the provided testing function.

**`Since`**

1.0.0

**`Example`**

```ts
const users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = findLastIndex(users, user => user.user === 'fred');
console.log(result);
// => 1
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to search in. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration. |
| `fromIndex?` | `number` | `0` | The index to start searching from. |
| `toIndex?` | `number` | `undefined` | The index to stop searching at. |

#### Returns

`number`

- Returns the index of the found element, else -1.

#### Defined in

[findLastIndex.ts:29](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/findLastIndex.ts#L29)

___

### first

▸ **first**<`T`\>(`array`): `undefined` \| `T`

Returns the first element of an array, or undefined if the array is empty.

**`Since`**

1.0.0

**`Example`**

```ts
first([1, 2, 3]); // => 1

first([]); // => undefined
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to query. |

#### Returns

`undefined` \| `T`

The first element of the array, or undefined if the array is empty.

#### Defined in

[head.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/head.ts#L16)

___

### flatten

▸ **flatten**<`T`\>(`array`): `any`[]

Flattens an array of nested arrays into a single flat array.

**`Since`**

1.0.0

**`Example`**

```ts
flatten([1, [2, [3, [4]], 5]]); // Returns: [1, 2, 3, 4, 5]
flatten(['a', ['b', ['c']]]); // Returns: ['a', 'b', 'c']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to flatten. |

#### Returns

`any`[]

Returns the new flattened array.

#### Defined in

[flatten.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/flatten.ts#L15)

___

### flattenDeep

▸ **flattenDeep**<`T`\>(`array`): `any`[]

Recursively flattens `array`.

**`Since`**

1.0.0

**`Example`**

```ts
flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to flatten. |

#### Returns

`any`[]

Returns the new flattened array.

#### Defined in

[flattenDeep.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/flattenDeep.ts#L14)

___

### flattenDepth

▸ **flattenDepth**<`T`\>(`array`, `depth?`): `any`[]

Flattens an array up to the specified depth.

**`Since`**

1.0.0

**`Example`**

```ts
flattenDepth([1, [2, [3, [4]], 5]], 2);
// => [1, 2, 3, [4], 5]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to flatten. |
| `depth?` | `number` | `1` | The maximum recursion depth. |

#### Returns

`any`[]

- The new flattened array.

#### Defined in

[flattenDepth.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/flattenDepth.ts#L15)

___

### fromPairs

▸ **fromPairs**<`T`\>(`array`): `Object`

Creates an object from an array of key-value pairs.

**`Since`**

1.0.0

**`Example`**

```ts
fromPairs([['a', 1], ['b', 2], ['c', 3]]); // {a: 1, b: 2, c: 3}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[][] | The array of key-value pairs to convert to an object. |

#### Returns

`Object`

An object created from the key-value pairs in the input array.

#### Defined in

[fromPairs.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/fromPairs.ts#L13)

___

### head

▸ **head**<`T`\>(`array`): `undefined` \| `T`

Returns the first element of an array, or undefined if the array is empty.

**`Since`**

1.0.0

**`Example`**

```ts
head([1, 2, 3]); // => 1

head([]); // => undefined
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to query. |

#### Returns

`undefined` \| `T`

The first element of the array, or undefined if the array is empty.

#### Defined in

[head.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/head.ts#L16)

___

### indexOf

▸ **indexOf**<`T`\>(`array`, `value`, `startIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if not found.

**`Since`**

1.0.0

**`Example`**

```ts
const fruits = ['apple', 'banana', 'mango', 'orange'];
const index1 = indexOf(fruits, 'banana'); // 1
const index2 = indexOf(fruits, 'papaya'); // -1
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array to search. |
| `value` | `T` | `undefined` | The value to search for. |
| `startIndex?` | `number` | `0` | The index to start the search from. |

#### Returns

`number`

- The index of the first occurrence of the value, or -1 if not found.

#### Defined in

[indexOf.ts:18](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/indexOf.ts#L18)

___

### initial

▸ **initial**<`T`\>(`array`): `T`[]

Returns all the elements of an array except the last one.

**`Since`**

1.0.0

**`Example`**

```ts
initial([1, 2, 3]); // returns [1, 2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to query. |

#### Returns

`T`[]

- A new array with all elements except the last one.

#### Defined in

[initial.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/initial.ts#L13)

___

### intersection

▸ **intersection**<`T`\>(`array1`, `array2`): `T`[]

Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.

**`Since`**

1.0.0

**`Example`**

```ts
intersection([1, 2, 3], [4, 3, 2])
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
// => ['apple', 'orange']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |

#### Returns

`T`[]

- The array of common elements.

#### Defined in

[interface/IIntersection.ts:2](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersection.ts#L2)

▸ **intersection**<`T`\>(`array1`, `array2`, `array3`): `T`[]

Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.

**`Since`**

1.0.0

**`Example`**

```ts
intersection([1, 2, 3], [4, 3, 2])
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
// => ['apple', 'orange']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |

#### Returns

`T`[]

- The array of common elements.

#### Defined in

[interface/IIntersection.ts:3](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersection.ts#L3)

▸ **intersection**<`T`\>(`array1`, `array2`, `array3`, `array4`): `T`[]

Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.

**`Since`**

1.0.0

**`Example`**

```ts
intersection([1, 2, 3], [4, 3, 2])
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
// => ['apple', 'orange']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |

#### Returns

`T`[]

- The array of common elements.

#### Defined in

[interface/IIntersection.ts:4](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersection.ts#L4)

▸ **intersection**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`): `T`[]

Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.

**`Since`**

1.0.0

**`Example`**

```ts
intersection([1, 2, 3], [4, 3, 2])
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
// => ['apple', 'orange']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `array5` | `T`[] |

#### Returns

`T`[]

- The array of common elements.

#### Defined in

[interface/IIntersection.ts:5](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersection.ts#L5)

▸ **intersection**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `...args`): `T`[]

Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.

**`Since`**

1.0.0

**`Example`**

```ts
intersection([1, 2, 3], [4, 3, 2])
// => [2, 3]

intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
// => ['apple', 'orange']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `array5` | `T`[] |
| `...args` | `T`[][] |

#### Returns

`T`[]

- The array of common elements.

#### Defined in

[interface/IIntersection.ts:6](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersection.ts#L6)

___

### intersectionBy

▸ **intersectionBy**<`T`\>(`array`, `...args`): `T`[]

Returns an array of unique values that are included in all given arrays, using a provided iteratee function.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionBy([2.1, 1.2], [4.3, 2.4], [1.2, 2.4]);
// => [2.1]

intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]

intersectionBy([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], (o) => o.x);
// => [{'x': 1, 'y': 2}]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |
| `...args` | `any`[] | The arrays to intersect with. |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[intersectionBy.ts:26](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/intersectionBy.ts#L26)

___

### intersectionWith

▸ **intersectionWith**<`T`\>(`array1`, `array2`, `comparator`): `T`[]

This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
The order and references of result values are determined by the first array.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `comparator` | `Function` |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[interface/IIntersectionWith.ts:2](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersectionWith.ts#L2)

▸ **intersectionWith**<`T`\>(`array1`, `array2`, `array3`, `comparator`): `T`[]

This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
The order and references of result values are determined by the first array.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `comparator` | `Function` |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[interface/IIntersectionWith.ts:3](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersectionWith.ts#L3)

▸ **intersectionWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `comparator`): `T`[]

This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
The order and references of result values are determined by the first array.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `comparator` | `Function` |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[interface/IIntersectionWith.ts:4](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersectionWith.ts#L4)

▸ **intersectionWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `comparator`): `T`[]

This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
The order and references of result values are determined by the first array.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `T`[] |
| `array2` | `T`[] |
| `array3` | `T`[] |
| `array4` | `T`[] |
| `array5` | `T`[] |
| `comparator` | `Function` |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[interface/IIntersectionWith.ts:11](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersectionWith.ts#L11)

▸ **intersectionWith**<`T`\>(`array1`, `array2`, `array3`, `array4`, `array5`, `array6`, `...args`): `T`[]

This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
The order and references of result values are determined by the first array.

**`Since`**

1.0.0

**`Example`**

```ts
intersectionWith(
  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
  [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);
// => [{ 'x': 1, 'y': 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array1` | `T`[] | - |
| `array2` | `T`[] | - |
| `array3` | `T`[] | - |
| `array4` | `T`[] | - |
| `array5` | `T`[] | - |
| `array6` | `T`[] | - |
| `...args` | `any` | The arrays of values to inspect. |

#### Returns

`T`[]

Returns the new array of intersecting values.

#### Defined in

[interface/IIntersectionWith.ts:19](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/interface/IIntersectionWith.ts#L19)

___

### join

▸ **join**<`T`\>(`array`, `joiner?`): `string`

Joins all elements of an array into a string separated by the specified separator.

**`Example`**

```ts
join([1, 2, 3], '-'); // returns '1-2-3'
join(['a', 'b', 'c'], ''); // returns 'abc'
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to join. |
| `joiner?` | `string` | `','` | The separator to use when joining the elements. |

#### Returns

`string`

The string created by joining the array elements.

#### Defined in

[join.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/join.ts#L14)

___

### last

▸ **last**<`T`\>(`array`): `undefined` \| `T`

Returns the last element of an array.

**`Example`**

```ts
last([1, 2, 3])
// => 3

last([])
// => undefined
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to query. |

#### Returns

`undefined` \| `T`

- Returns the last element of the array.

#### Defined in

[last.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/last.ts#L14)

___

### lastIndexOf

▸ **lastIndexOf**<`T`\>(`array`, `element`, `fromIndex?`): `number`

Returns the index of the last occurrence of the specified element in the array, searching backwards from the given index.

**`Example`**

```ts
const fruits = ['apple', 'banana', 'orange', 'banana', 'orange'];
const lastIndex1 = lastIndexOf(fruits, 'banana'); // returns 3
const lastIndex2 = lastIndexOf(fruits, 'orange', 2); // returns 2
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array to search in. |
| `element` | `T` | The element to search for. |
| `fromIndex?` | `number` | - |

#### Returns

`number`

- The index of the last occurrence of the element in the array, or -1 if not found.

#### Defined in

[lastIndexOf.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/lastIndexOf.ts#L14)

___

### nth

▸ **nth**<`T`\>(`array`, `index?`): `undefined` \| `T`

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
console.log(nth(arr)); // Output: 1
console.log(nth(arr, 2)); // Output: 3
console.log(nth(arr, -1)); // Output: 5
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to query. |
| `index?` | `number` | `0` | The index of the element to return. |

#### Returns

`undefined` \| `T`

- Returns the nth element of `array`.

#### Defined in

[nth.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/nth.ts#L14)

___

### pull

▸ **pull**<`T`\>(`array`, `...elementsToRemove`): `T`[]

Removes all occurrences of specified values from an array.

**`Example`**

```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
const result = pull(arr, 'a', 'c');
console.log(result); // Output: ['b', 'b']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to modify. |
| `...elementsToRemove` | `T`[] | The values to remove. |

#### Returns

`T`[]

- The modified array with values removed.

#### Defined in

[pull.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/pull.ts#L15)

___

### pullAll

▸ **pullAll**<`T`\>(`array`, `elementsToRemove`): `T`[]

Removes all instances of specified elements from an array.

**`Example`**

```ts
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

pullAll(arr, ['a', 'c']);

console.log(arr);
// expected output: ['b', 'b']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to modify. |
| `elementsToRemove` | `T`[] | The elements to remove from the array. |

#### Returns

`T`[]

The modified array with specified elements removed.

#### Defined in

[pullAll.ts:20](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/pullAll.ts#L20)

___

### pullAllBy

▸ **pullAllBy**<`T`\>(`array`, `elementsToRemove`, `iteratee?`): `T`[]

Removes all given elements from the array using a custom iteratee function

**`Example`**

```ts
const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }];
const removedUsers = pullAllBy(users, [{ name: 'John' }, { name: 'Jane' }], 'name');

console.log(removedUsers); // [{ name: 'Bob', age: 40 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The source array |
| `elementsToRemove` | `T`[] | `undefined` | The array of elements to be removed |
| `iteratee?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration |

#### Returns

`T`[]

The new array with removed elements

#### Defined in

[pullAllBy.ts:22](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/pullAllBy.ts#L22)

___

### pullAllWith

▸ **pullAllWith**<`T`\>(`array`, `elementsToRemove`, `comparator`): `T`[]

Removes all given elements from the array using a custom comparator function.

**`Example`**

```ts
const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }, { id: 3, name: 'Peter' }];
const result = pullAllWith(arr, [{ id: 1, name: 'John' }, { id: 3, name: 'Peter' }], (a, b) => a.id === b.id);
console.log(result); // [{ id: 2, name: 'Mary' }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array. |
| `elementsToRemove` | `T`[] | The elements to be removed from the array. |
| `comparator` | `Function` | The comparator function to be used for comparison. |

#### Returns

`T`[]

- The modified array.

#### Defined in

[pullAllWith.ts:18](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/pullAllWith.ts#L18)

___

### pullAt

▸ **pullAt**<`T`\>(`array`, `indexes`): `T`[]

Removes elements from an array corresponding to the specified indexes, and returns an array of removed elements.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
const removed = pullAt(arr, [1, 3]);
console.log(arr); // [1, 3, 5]
console.log(removed); // [2, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to modify. |
| `indexes` | `number` \| `number`[] | The indexes of the elements to remove from the array. |

#### Returns

`T`[]

An array of removed elements.

#### Defined in

[pullAt.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/pullAt.ts#L17)

___

### remove

▸ **remove**<`T`\>(`array`, `predicate?`): `T`[]

Removes all elements from an array that satisfy the predicate and returns an array with the removed elements.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
const removed = remove(arr, n => n % 2 === 0);
console.log(arr); // [1, 3, 5]
console.log(removed); // [2, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to modify. |
| `predicate?` | `Function` | `identity` | The function invoked per iteration. |

#### Returns

`T`[]

- An array of removed elements.

#### Defined in

[remove.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/remove.ts#L17)

___

### reverse

▸ **reverse**<`T`\>(`array`): `T`[]

Reverses an array in place.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
reverse(arr); // [5, 4, 3, 2, 1]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array. |

#### Returns

`T`[]

The reversed array.

#### Defined in

[reverse.ts:12](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/reverse.ts#L12)

___

### slice

▸ **slice**<`T`\>(`array`, `start?`, `end?`): `T`[]

Returns a new array containing the elements of the original array starting from `start` up to, but not including, `end`.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];

slice(arr);         // [1, 2, 3, 4, 5]
slice(arr, 2);      // [3, 4, 5]
slice(arr, 2, 4);   // [3, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The original array. |
| `start?` | `number` | `0` | The start index (inclusive). Defaults to 0. |
| `end?` | `number` | `array.length` | The end index (exclusive). Defaults to the length of the array. |

#### Returns

`T`[]

A new array containing the elements from the original array between the specified start and end indexes.

#### Defined in

[slice.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/slice.ts#L17)

___

### sortedIndex

▸ **sortedIndex**<`T`\>(`array`, `value`): `number`

Returns the index at which the specified value should be inserted into the
array in order to maintain its sorted order.

**`Example`**

```ts
sortedIndex([10, 20, 30, 40], 35); // Returns 3
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The sorted array to search in. |
| `value` | `T` | The value to search for. |

#### Returns

`number`

The index at which the specified value should be inserted.

#### Defined in

[sortedIndex.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedIndex.ts#L15)

___

### sortedIndexBy

▸ **sortedIndexBy**<`T`\>(`array`, `value`, `iteratee?`): `number`

Uses a function to determine the sort order of the input array and returns the index at which the input value should be inserted in order to maintain that sort order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The sorted array to inspect. |
| `value` | `T` | `undefined` | The value to evaluate. |
| `iteratee?` | `predicateType`<`T`\> | `identity` | The iteratee invoked per element. |

#### Returns

`number`

Returns the index at which the value should be inserted into the array.

#### Defined in

[sortedIndexBy.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedIndexBy.ts#L14)

___

### sortedIndexOf

▸ **sortedIndexOf**<`T`\>(`array`, `value`): `number`

Returns the index of the first occurrence of the specified value in a sorted array, or -1 if not found.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
console.log(sortedIndexOf(arr, 3)); // Output: 2
console.log(sortedIndexOf(arr, 6)); // Output: -1
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The sorted input array to search. |
| `value` | `T` | The value to search for. |

#### Returns

`number`

The index of the first occurrence of the value, or -1 if not found.

#### Defined in

[sortedIndexOf.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedIndexOf.ts#L14)

___

### sortedLastIndex

▸ **sortedLastIndex**<`T`\>(`array`, `value`): `number`

This method is like `sortedIndex` except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The sorted array to inspect. |
| `value` | `T` | The value to evaluate. |

#### Returns

`number`

- Returns the index at which value should be inserted into array.

#### Defined in

[sortedLastIndex.ts:9](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedLastIndex.ts#L9)

___

### sortedLastIndexBy

▸ **sortedLastIndexBy**<`T`\>(`array`, `value`, `iteratee?`): `number`

Returns the highest index at which value should be inserted into array
in order to maintain its sorted order, based on a provided iteratee function.

**`Example`**

```ts
const users = [{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }, { id: 3, name: 'Mary' }];
sortedLastIndexBy(users, { id: 2 }, ({ id }) => id); // 3
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The sorted array to inspect. |
| `value` | `T` | `undefined` | The value to evaluate. |
| `iteratee?` | `predicateType`<`T`\> | `identity` | The iteratee invoked per element. |

#### Returns

`number`

Returns the index at which value should be inserted into array.

#### Defined in

[sortedLastIndexBy.ts:20](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedLastIndexBy.ts#L20)

___

### sortedLastIndexOf

▸ **sortedLastIndexOf**<`T`\>(`array`, `value`): `number`

Returns the index of the last occurrence of a specified value in a sorted array.
Uses a binary search algorithm for efficiency.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 4, 4, 5, 6];

sortedLastIndexOf(arr, 4); // returns 5
sortedLastIndexOf(arr, 7); // returns -1
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The sorted array to search in. |
| `value` | `T` | The value to search for. |

#### Returns

`number`

- The index of the last occurrence of the value, or -1 if not found.

#### Defined in

[sortedLastIndexOf.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedLastIndexOf.ts#L16)

___

### sortedUniq

▸ **sortedUniq**<`T`\>(`array`): `T`[]

Creates a new array with all duplicate values removed. Assumes the input array is already sorted.

**`Example`**

```ts
sortedUniq([1, 1, 2, 2, 3, 4, 4, 5]); // Returns: [1, 2, 3, 4, 5]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array to remove duplicates from. |

#### Returns

`T`[]

Returns the new array of unique values.

#### Defined in

[sortedUniq.ts:12](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedUniq.ts#L12)

___

### sortedUniqBy

▸ **sortedUniqBy**<`T`\>(`array`, `iteratee`): `T`[]

This function creates a new array with unique values from the input `array`,
based on the result of applying the `iteratee` function to each element. The order of
elements in the returned array is based on the order of the first occurrence of each value.

**`Example`**

```ts
const array = [{ x: 1 }, { x: 2 }, { x: 1 }];
const result = sortedUniqBy(array, o => o.x);
console.log(result); // Output: [{ x: 1 }, { x: 2 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array to process. |
| `iteratee` | `Function` | The function invoked per iteration. |

#### Returns

`T`[]

A new array of unique values.

#### Defined in

[sortedUniqBy.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/sortedUniqBy.ts#L16)

___

### tail

▸ **tail**<`T`\>(`array`): `T`[]

Returns all the elements of an array except for the first one.

**`Example`**

```ts
const arr = [1, 2, 3, 4];
const result = tail(arr);
console.log(result); // [2, 3, 4]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array. |

#### Returns

`T`[]

A new array containing all elements of the input array except the first one.

#### Defined in

[tail.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/tail.ts#L13)

___

### take

▸ **take**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of the `array` with `n` elements taken from the beginning.

**`Example`**

```ts
const numbers = [1, 2, 3, 4, 5];

take(numbers, 3); // => [1, 2, 3]
take(numbers, 1); // => [1]
take(numbers);    // => [1]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to query. |
| `n?` | `number` | `1` | The number of elements to take. |

#### Returns

`T`[]

- Returns the slice of `array`.

#### Defined in

[take.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/take.ts#L16)

___

### takeRight

▸ **takeRight**<`T`\>(`array`, `length?`): `T`[]

Creates a new array with the last `n` elements of `array`.

**`Example`**

```ts
takeRight([1, 2, 3, 4, 5], 3);
// => [3, 4, 5]

takeRight([1, 2, 3, 4, 5]);
// => [5]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array. |
| `length?` | `number` | `1` | The number of elements to take. |

#### Returns

`T`[]

Returns the new array.

#### Defined in

[takeRight.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/takeRight.ts#L15)

___

### takeRightWhile

▸ **takeRightWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a new array with the elements from the end of the given array
that satisfy the provided predicate function, stopping as soon as an element
does not satisfy it.

**`Example`**

```ts
takeRightWhile([1, 2, 3, 4, 5], n => n > 3);
// => [4, 5]

takeRightWhile([{ name: 'John', active: false }, { name: 'Mary', active: true }], { active: true });
// => [{ name: 'Mary', active: true }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The source array to query. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration. |

#### Returns

`T`[]

Returns the new array of elements.

#### Defined in

[takeRightWhile.ts:21](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/takeRightWhile.ts#L21)

___

### takeWhile

▸ **takeWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a new array containing the elements of the input array, up until the predicate returns false.

**`Example`**

```ts
takeWhile([1, 2, 3, 4], n => n < 3);
// Returns: [1, 2]

takeWhile(['cat', 'dog', 'emu'], animal => animal.length <= 3);
// Returns: ['cat', 'dog']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The predicate function to be called on each element. |

#### Returns

`T`[]

- The new array of elements that passed the predicate, until the first that returned false.

#### Defined in

[takeWhile.ts:21](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/takeWhile.ts#L21)

___

### union

▸ **union**<`T`\>(`array`, `...restArray`): `T`[]

Creates an array of unique values, in order, from all given arrays using Set.

**`Example`**

```ts
const result = union([2], [1, 2]);
console.log(result);
> [2, 1]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The first array. |
| `...restArray` | `T`[][] | The rest of the arrays. |

#### Returns

`T`[]

The new array of combined unique values.

#### Defined in

[union.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/union.ts#L13)

___

### unionBy

▸ **unionBy**<`T`\>(`array`, `...args`): `T`[]

Creates an array of unique values, in order, by iterating over all elements of all the given arrays, and returning the unique elements by using an iteratee function to extract a value for comparison.

**`Example`**

```ts
unionBy([2.1], [1.2, 2.3], Math.floor);
// returns [2.1, 1.2]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |
| `...args` | `any` | The rest of the arrays to inspect. |

#### Returns

`T`[]

- Returns the new array of combined values.

#### Defined in

[unionBy.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/unionBy.ts#L15)

___

### unionWith

▸ **unionWith**<`T`\>(`array`, `...args`): `T`[]

This method creates an array of unique values that are included in all given arrays, using a comparator function for equality comparisons.

**`Example`**

```ts
unionWith([{ x: 1, y: 2 }, { x: 2, y: 1 }], [{ x: 1, y: 2 }, { x: 2, y: 1 }], (a, b) => a.x === b.x);
// => [{ x: 1, y: 2 }, { x: 2, y: 1 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |
| `...args` | `any` | The arrays to check for the union. |

#### Returns

`T`[]

Returns the new array of combined values.

#### Defined in

[unionWith.ts:16](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/unionWith.ts#L16)

___

### uniq

▸ **uniq**<`T`\>(`array`): `T`[]

Creates a new array with unique elements from the original array.

**`Example`**

```ts
uniq([2, 1, 2]) // returns [2, 1]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |

#### Returns

`T`[]

Returns the new array of unique elements.

#### Defined in

[uniq.ts:11](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/uniq.ts#L11)

___

### uniqBy

▸ **uniqBy**<`T`\>(`array`, `iteratee?`): `T`[]

Creates a new array of unique values, based on the result of the given iteratee function.

**`Example`**

```ts
const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'Jim' }];
const result = uniqBy(array, 'id');
console.log(result); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The input array. |
| `iteratee?` | `predicateType`<`T`\> | `identity` | The function used to get the unique value for each element. |

#### Returns

`T`[]

- The new array of unique values.

#### Defined in

[uniqBy.ts:18](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/uniqBy.ts#L18)

___

### uniqWith

▸ **uniqWith**<`T`\>(`array`, `comparator?`): `T`[]

Creates a duplicate-free version of an array, using a comparator function to compare the elements.

**`Example`**

```ts
const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

uniqWith(objects, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | The array to inspect. |
| `comparator?` | `predicateType`<`T`\> | `identity` | The function invoked per iteration to compare elements. |

#### Returns

`T`[]

Returns the new duplicate free array.

#### Defined in

[uniqWith.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/uniqWith.ts#L17)

___

### unshift

▸ **unshift**<`T`\>(`array`, `...elements`): `T`[]

Adds one or more elements to the beginning of an array and returns the new length of the array.

**`Example`**

```ts
unshift([1, 2, 3], 4); // Returns [4, 1, 2, 3]
unshift(['a', 'b'], 'c', 'd'); // Returns ['c', 'd', 'a', 'b']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to add elements to. |
| `...elements` | `any` | The elements to add to the beginning of the array. |

#### Returns

`T`[]

The modified array with new elements added to the beginning.

#### Defined in

[unshift.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/unshift.ts#L15)

___

### unzip

▸ **unzip**(`array`): `any`[][]

This function takes an array of arrays and groups the elements of the inner arrays by their index
into a new array of arrays.

**`Example`**

```ts
unzip([[1, 'a'], [2, 'b'], [3, 'c']]); // [[1, 2, 3], ['a', 'b', 'c']]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[][] | The array of arrays to unzip |

#### Returns

`any`[][]

- A new array of arrays containing the grouped elements

#### Defined in

[unzip.ts:15](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/unzip.ts#L15)

___

### unzipWith

▸ **unzipWith**<`T`\>(`array`, `predicate?`): `any`[]

This method is like `unzip` except that it accepts `iteratee` to specify how regrouped values should be combined.

**`Example`**

const zipped = zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

const unzipped = unzipWith(zipped, (str: string, num: number, bool: boolean) => `${str}${num}${bool}`; );
// => ['a1true', 'b2false']

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any`[][] | `undefined` | The array of grouped elements to process. |
| `predicate?` | `predicateType`<`T`\> | `identity` | The iteratee to combine regrouped values. |

#### Returns

`any`[]

- Returns the new array of regrouped elements.

#### Defined in

[unzipWith.ts:21](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/unzipWith.ts#L21)

___

### without

▸ **without**<`T`\>(`array`, `...exception`): `T`[]

Returns a new array with all instances of the provided values removed.

**`Example`**

```ts
const arr = [1, 2, 3, 4, 5];
const result = without(arr, 2, 4); // result = [1, 3, 5]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The source array. |
| `...exception` | `T`[] | The values to exclude from the returned array. |

#### Returns

`T`[]

- A new array without the specified values.

#### Defined in

[without.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/without.ts#L13)

___

### xor

▸ **xor**<`T`\>(`array`, `...restArray`): `T`[]

Returns an array of unique values that are included only in one of the given arrays.

**`Example`**

```ts
xor([2, 1], [2, 3]) // returns [1, 3]
xor(['a', 'b', 'c'], ['b', 'd'], ['d', 'e']) // returns ['a', 'c', 'e']
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The input array. |
| `...restArray` | `T`[][] | The rest of the arrays to be compared. |

#### Returns

`T`[]

- An array of unique values from the input arrays.

#### Defined in

[xor.ts:14](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/xor.ts#L14)

___

### xorBy

▸ **xorBy**<`T`\>(`array`, `...args`): `T`[]

Creates an array of unique values that are included in exactly one of the given arrays

**`Example`**

```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6];
const arr3 = [1, 2, 5];

const result = xorBy(arr1, arr2, arr3, (n) => n % 2);
console.log(result); // Output: [3, 6]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |
| `...args` | `any` | The arrays to inspect. |

#### Returns

`T`[]

- Returns the new array of filtered values.

#### Defined in

[xorBy.ts:23](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/xorBy.ts#L23)

___

### xorWith

▸ **xorWith**<`T`\>(`array`, `...args`): `T`[]

Creates an array of unique values that are included in the first given array,
but not in any of the other given arrays, using a custom comparator function to determine uniqueness.

**`Example`**

```ts
const array1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const array2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
const result = xorWith(array1, array2, (a, b) => a.x === b.x && a.y === b.y);
console.log(result);
// => [{x: 2, y: 1}, {x: 1, y: 1}]
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the arrays. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to inspect. |
| `...args` | `any` | The arrays to exclude. |

#### Returns

`T`[]

Returns the new array of filtered values.

#### Defined in

[xorWith.ts:22](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/xorWith.ts#L22)

___

### zip

▸ **zip**(`array`, `...args`): `any`[][]

Zips together arrays into an array of arrays, with each array element at the same index.

**`Example`**

```ts
zip([1, 2], [10, 20], [100, 200]); // returns [[1, 10, 100], [2, 20, 200]]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | The first array to zip. |
| `...args` | `any`[][] | The other arrays to zip. |

#### Returns

`any`[][]

An array of arrays, each containing one element from each input array at the same index.

#### Defined in

[zip.ts:12](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/zip.ts#L12)

___

### zipObject

▸ **zipObject**(`props?`, `values?`): `Object`

Creates an object from arrays of property names and values, where property names become object keys and values become object values.

**`Example`**

```ts
zipObject(['a', 'b'], [1, 2]) // {a: 1, b: 2}
zipObject(['a', 'b'], [1]) // {a: 1, b: undefined}
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `props?` | `any`[] | `[]` | An array of property names. |
| `values?` | `any`[] | `[]` | An array of values. |

#### Returns

`Object`

- The new object.

#### Defined in

[zipObject.ts:13](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/zipObject.ts#L13)

___

### zipWith

▸ **zipWith**(`arrays`, `...args`): `any`[]

Creates an array of grouped elements, the first element of the tuples containing the first element of the passed arrays, and so on.
The provided function is used to combine the tuples in the resulting arrays.
If no function is provided, the default function returns the array of tuples.

**`Example`**

```ts
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
// => [111, 222]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrays` | `any`[] | The arrays to be grouped together. |
| `...args` | `any`[] | - |

#### Returns

`any`[]

- Returns the new array of grouped elements.

#### Defined in

[zipWith.ts:17](https://github.com/PunitSoniME/alt-lodash/blob/7542bf6/src/array/zipWith.ts#L17)
