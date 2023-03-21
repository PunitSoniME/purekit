# Alternate of Lodash Library

## https://alt-lodash.vercel.app

<br />


[![CI](https://github.com/PunitSoniME/alt-lodash/actions/workflows/main.yml/badge.svg)](https://github.com/PunitSoniME/alt-lodash/actions/workflows/main.yml)
[![Rate this package](https://badges.openbase.com/js/rating/alt-lodash.svg?token=LsZ/SAF9sVVDLFYX3t2XIX5W6JEuM2OZBYIpJvm25wg=)](https://openbase.com/js/alt-lodash?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![Join the chat at https://gitter.im/alt-lodash/developers](https://badges.gitter.im/alt-lodash/developers.svg)](https://gitter.im/alt-lodash/developers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![tree shaking](https://badgen.net/bundlephobia/tree-shaking/alt-lodash)
![nodejs](https://badgen.net/npm/node/alt-lodash)

[![npm version](https://badge.fury.io/js/alt-lodash.svg)][npm_url]
[![license](https://img.shields.io/npm/l/alt-lodash.svg)][npm_url]
![Types Included](https://badgen.net/npm/types/alt-lodash)


![dependents](https://badgen.net/npm/dependents/alt-lodash)
[![weekly downloads](https://badgen.net/npm/dw/alt-lodash)][npm_url]
[![weekly downloads](https://badgen.net/npm/dm/alt-lodash)][npm_url]
[![downloads](https://img.shields.io/npm/dt/alt-lodash.svg)][npm_url]
![jsDelivr](https://badgen.net/jsdelivr/hits/npm/alt-lodash)

![minified](https://badgen.net/bundlephobia/min/alt-lodash)
![gzip](https://badgen.net/bundlephobia/minzip/alt-lodash)

[npm_url]: https://www.npmjs.org/package/alt-lodash


# Installation

With Yarn:

```bash
yarn add alt-lodash
```

With npm:

```bash
npm install alt-lodash
```

# Usage

```ts
//  import all available the methods

import _ from 'alt-lodash';     //  ESM ( ECMA Script ) module

or

const _ = require('alt-lodash');    //  cjs ( common js ) module
```


```ts
//  import specific methods instead of all

import { concat, chunk, forEach, filter } from 'alt-lodash';     //  ESM ( ECMA Script ) module

or

const { concat, chunk, forEach, filter } = require('alt-lodash');    //  cjs ( common js ) module
```


# Array

- [chunk ✔️](https://alt-lodash.vercel.app/home#chunk)

- [compact ✔️](https://alt-lodash.vercel.app/home#compact)
- [concat ✔️](https://alt-lodash.vercel.app/home#concat)
- [difference ✔️](https://alt-lodash.vercel.app/home#difference)
- [differenceBy ✔️](https://alt-lodash.vercel.app/home#differenceBy)
- [differenceWith ✔️](https://alt-lodash.vercel.app/home#differenceWith)
- [drop ✔️](https://alt-lodash.vercel.app/home#drop)
- [dropRight ✔️](https://alt-lodash.vercel.app/home#dropRight)
- [dropRightWhile ✔️](https://alt-lodash.vercel.app/home#dropRightWhile)
- [dropWhile ✔️](https://alt-lodash.vercel.app/home#dropWhile)
- [fill ✔️](https://alt-lodash.vercel.app/home#fill)
- [findIndex ✔️](https://alt-lodash.vercel.app/home#findIndex)
- [findLastIndex ✔️](https://alt-lodash.vercel.app/home#findLastIndex)
- [first -> head ✔️](https://alt-lodash.vercel.app/home#first)
- [flatten ✔️](https://alt-lodash.vercel.app/home#flatten)
- [flattenDeep ✔️](https://alt-lodash.vercel.app/home#flattenDeep)
- [flattenDepth ✔️](https://alt-lodash.vercel.app/home#flattenDepth)
- [fromPairs ✔️](https://alt-lodash.vercel.app/home#fromPairs)
- [head ✔️](https://alt-lodash.vercel.app/home#head)
- [indexOf ✔️](https://alt-lodash.vercel.app/home#indexOf)
- [initial ✔️](https://alt-lodash.vercel.app/home#initial)
- [intersection ✔️](https://alt-lodash.vercel.app/home#intersection)
- [intersectionBy ✔️](https://alt-lodash.vercel.app/home#intersectionBy)
- [intersectionWith ✔️](https://alt-lodash.vercel.app/home#intersectionWith)
- [join ✔️](https://alt-lodash.vercel.app/home#join)
- [last ✔️](https://alt-lodash.vercel.app/home#last)
- [lastIndexOf ✔️](https://alt-lodash.vercel.app/home#lastIndexOf)
- [nth ✔️](https://alt-lodash.vercel.app/home#nth)
- [pull ✔️](https://alt-lodash.vercel.app/home#pull)
- [pullAll ✔️](https://alt-lodash.vercel.app/home#pullAll)
- [pullAllBy ✔️](https://alt-lodash.vercel.app/home#pullAllBy)
- [pullAllWith ✔️](https://alt-lodash.vercel.app/home#pullAllWith)
- [pullAt ✔️](https://alt-lodash.vercel.app/home#pullAt)
- [remove ✔️](https://alt-lodash.vercel.app/home#remove)
- [reverse ✔️](https://alt-lodash.vercel.app/home#reverse)
- [slice ✔️](https://alt-lodash.vercel.app/home#slice)
- [sortedIndex ✔️](https://alt-lodash.vercel.app/home#sortedIndex)
- [sortedIndexBy ✔️](https://alt-lodash.vercel.app/home#sortedIndexBy)
- [sortedIndexOf ✔️](https://alt-lodash.vercel.app/home#sortedIndexOf)
- [sortedLastIndex ✔️](https://alt-lodash.vercel.app/home#sortedLastIndex)
- [sortedLastIndexBy ✔️](https://alt-lodash.vercel.app/home#sortedLastIndexBy)
- [sortedLastIndexOf ✔️](https://alt-lodash.vercel.app/home#sortedLastIndexOf)
- [sortedUniq ✔️](https://alt-lodash.vercel.app/home#sortedUniq)
- [sortedUniqBy ✔️](https://alt-lodash.vercel.app/home#sortedUniqBy)
- [tail ✔️](https://alt-lodash.vercel.app/home#tail)
- [take ✔️](https://alt-lodash.vercel.app/home#take)
- [takeRight ✔️](https://alt-lodash.vercel.app/home#takeRight)
- [takeRightWhile ✔️](https://alt-lodash.vercel.app/home#takeRightWhile)
- [takeWhile ✔️](https://alt-lodash.vercel.app/home#takeWhile)
- [union ✔️](https://alt-lodash.vercel.app/home#union)
- [unionBy ✔️](https://alt-lodash.vercel.app/home#unionBy)
- [unionWith ✔️](https://alt-lodash.vercel.app/home#unionWith)
- [uniq ✔️](https://alt-lodash.vercel.app/home#uniq)
- [uniqBy ✔️](https://alt-lodash.vercel.app/home#uniqBy)
- [uniqWith ✔️](https://alt-lodash.vercel.app/home#uniqWith)
- [unshift ✔️ **New**](https://alt-lodash.vercel.app/home#unshift)
- [unzip ✔️](https://alt-lodash.vercel.app/home#unzip)
- [unzipWith ✔️](https://alt-lodash.vercel.app/home#unzipWith)
- [without ✔️](https://alt-lodash.vercel.app/home#without)
- [xor ✔️](https://alt-lodash.vercel.app/home#xor)
- [xorBy ✔️](https://alt-lodash.vercel.app/home#xorBy)
- [xorWith ✔️](https://alt-lodash.vercel.app/home#xorWith)
- [zip ✔️](https://alt-lodash.vercel.app/home#zip)
- [zipObject ✔️](https://alt-lodash.vercel.app/home#zipObject)
- zipObjectDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #13](https://github.com/PunitSoniME/alt-lodash/issues/13)
- [zipWith ✔️](https://alt-lodash.vercel.app/home#zipWith)

<br />

# Collection

- [countBy ✔️](https://alt-lodash.vercel.app/home#countBy)

- [each -> forEach ✔️](https://alt-lodash.vercel.app/home#each)
- [eachRight -> forEachRight ✔️](https://alt-lodash.vercel.app/home#eachRight)
- [every ✔️](https://alt-lodash.vercel.app/home#every)
- [filter ✔️](https://alt-lodash.vercel.app/home#filter)
- [find ✔️](https://alt-lodash.vercel.app/home#find)
- [findLast ✔️](https://alt-lodash.vercel.app/home#findLast)
- [flatMap ✔️](https://alt-lodash.vercel.app/home#flatMap)
- [flatMapDeep ✔️](https://alt-lodash.vercel.app/home#flatMapDeep)
- [flatMapDepth ✔️](https://alt-lodash.vercel.app/home#flatMapDepth)
- [forEach ✔️](https://alt-lodash.vercel.app/home#forEach)
- [forEachRight ✔️](https://alt-lodash.vercel.app/home#forEachRight)
- [freeze ✔️ **New**](https://alt-lodash.vercel.app/home#freeze)
- [groupBy ✔️](https://alt-lodash.vercel.app/home#groupBy)
- [includes ✔️](https://alt-lodash.vercel.app/home#includes)
- [invokeMap ✔️](https://alt-lodash.vercel.app/home#invokeMap)
- [keyBy ✔️](https://alt-lodash.vercel.app/home#keyBy)
- [map ✔️](https://alt-lodash.vercel.app/home#map)
- [orderBy ✔️](https://alt-lodash.vercel.app/home#orderBy)
- [partition ✔️](https://alt-lodash.vercel.app/home#partition)
- [preventExtensions ✔️ **New**](https://alt-lodash.vercel.app/home#preventExtensions)
- [reduce ✔️](https://alt-lodash.vercel.app/home#reduce)
- [reduceRight ✔️](https://alt-lodash.vercel.app/home#reduceRight)
- [reject ✔️](https://alt-lodash.vercel.app/home#reject)
- [sample ✔️](https://alt-lodash.vercel.app/home#sample)
- [sampleSize ✔️](https://alt-lodash.vercel.app/home#sampleSize)
- [seal ✔️ **New**](https://alt-lodash.vercel.app/home#seal)
- [shuffle ✔️](https://alt-lodash.vercel.app/home#shuffle)
- [size ✔️](https://alt-lodash.vercel.app/home#size)
- [some ✔️](https://alt-lodash.vercel.app/home#some)
- [sortBy ✔️](https://alt-lodash.vercel.app/home#sortBy)

<br />

# Dates

- [now ✔️](https://alt-lodash.vercel.app/home#now)

<br />

# Function

- [after ✔️](https://alt-lodash.vercel.app/home#after]

- [ary ✔️](https://alt-lodash.vercel.app/home#ary)
- [before ✔️](https://alt-lodash.vercel.app/home#before)
- [bind ✔️](https://alt-lodash.vercel.app/home#bind)
- [bindKey ✔️](https://alt-lodash.vercel.app/home#bindKey)
- [curry ✔️](https://alt-lodash.vercel.app/home#curry)
- [curryRight ✔️](https://alt-lodash.vercel.app/home#curryRight)
- [debounce ✔️](https://alt-lodash.vercel.app/home#debounce)
- defer ( 🔜 - Work in progress - PRs most welcome ) [Issue - #17](https://github.com/PunitSoniME/alt-lodash/issues/17)
- [delay ✔️](https://alt-lodash.vercel.app/home#delay)
- [flip ✔️](https://alt-lodash.vercel.app/home#flip)
- memoize ( 🔜 - Work in progress - PRs most welcome ) [Issue - #18](https://github.com/PunitSoniME/alt-lodash/issues/18)
- [negate ✔️](https://alt-lodash.vercel.app/home#negate)
- [once ✔️](https://alt-lodash.vercel.app/home#once)
- [overArgs ✔️](https://alt-lodash.vercel.app/home#overArgs)
- [partial ✔️](https://alt-lodash.vercel.app/home#partial)
- [partialRight ✔️](https://alt-lodash.vercel.app/home#partialRight)
- [rearg ✔️](https://alt-lodash.vercel.app/home#rearg)
- [rest ✔️](https://alt-lodash.vercel.app/home#rest)
- [spread ✔️](https://alt-lodash.vercel.app/home#spread)
- throttle ( 🔜 - Work in progress - PRs most welcome ) [Issue - #19](https://github.com/PunitSoniME/alt-lodash/issues/19)
- [unary ✔️](https://alt-lodash.vercel.app/home#unary)
- [wrap ✔️](https://alt-lodash.vercel.app/home#wrap)

<br />

# Lang

- [castArray ✔️](https://alt-lodash.vercel.app/home#castArray)

- [clone ✔️](https://alt-lodash.vercel.app/home#clone)
- [cloneDeep ✔️](https://alt-lodash.vercel.app/home#cloneDeep)
- cloneDeepWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #20](https://github.com/PunitSoniME/alt-lodash/issues/20)
- [cloneWith ✔️](https://alt-lodash.vercel.app/home#cloneWith)
- [conformsTo ✔️](https://alt-lodash.vercel.app/home#conformsTo)
- [eq ✔️](https://alt-lodash.vercel.app/home#eq)
- [gt ✔️](https://alt-lodash.vercel.app/home#gt)
- [gte ✔️](https://alt-lodash.vercel.app/home#gte)
- [isArguments ✔️](https://alt-lodash.vercel.app/home#isArguments)
- [isArray ✔️](https://alt-lodash.vercel.app/home#isArray)
- [isArrayBuffer ✔️](https://alt-lodash.vercel.app/home#isArrayBuffer)
- [isArrayLike ✔️](https://alt-lodash.vercel.app/home#isArrayLike)
- [isArrayLikeObject ✔️](https://alt-lodash.vercel.app/home#isArrayLikeObject)
- [isBoolean ✔️](https://alt-lodash.vercel.app/home#isBoolean)
- [isBuffer ✔️](https://alt-lodash.vercel.app/home#isBuffer)
- [isDate ✔️](https://alt-lodash.vercel.app/home#isDate)
- [isElement ✔️](https://alt-lodash.vercel.app/home#isElement)
- [isEmpty ✔️](https://alt-lodash.vercel.app/home#isEmpty)
- [isEqual ✔️](https://alt-lodash.vercel.app/home#isEqual)
- [isEqualWith ✔️](https://alt-lodash.vercel.app/home#isEqualWith)
- [isError ✔️](https://alt-lodash.vercel.app/home#isError)
- [isExtensible ✔️ **New**](https://alt-lodash.vercel.app/home#isExtensible)
- [isFinite ✔️](https://alt-lodash.vercel.app/home#isFinite)
- [isFrozen ✔️ **New**](https://alt-lodash.vercel.app/home#isFrozen)
- [isFunction ✔️](https://alt-lodash.vercel.app/home#isFunction)
- [isInteger ✔️](https://alt-lodash.vercel.app/home#isInteger)
- [isLength ✔️](https://alt-lodash.vercel.app/home#isLength)
- [isMap ✔️](https://alt-lodash.vercel.app/home#isMap)
- [isMatch ✔️](https://alt-lodash.vercel.app/home#isMatch)
- [isMatchWith ✔️](https://alt-lodash.vercel.app/home#isMatchWith)
- [isNaN ✔️](https://alt-lodash.vercel.app/home#isNaN)
- [isNative ✔️](https://alt-lodash.vercel.app/home#isNative)
- [isNil ✔️](https://alt-lodash.vercel.app/home#isNil)
- [isNode ✔️ **New**](https://alt-lodash.vercel.app/home#isNode)
- [isNull ✔️](https://alt-lodash.vercel.app/home#isNull)
- [isNumber ✔️](https://alt-lodash.vercel.app/home#isNumber)
- [isObject ✔️](https://alt-lodash.vercel.app/home#isObject)
- [isObjectLike ✔️](https://alt-lodash.vercel.app/home#isObjectLike)
- [isPlainObject ✔️](https://alt-lodash.vercel.app/home#isPlainObject)
- [isRegExp ✔️](https://alt-lodash.vercel.app/home#isRegExp)
- [isSafeInteger ✔️](https://alt-lodash.vercel.app/home#isSafeInteger)
- [isSealed ✔️ **New**](https://alt-lodash.vercel.app/home#isSealed)
- [isSet ✔️](https://alt-lodash.vercel.app/home#isSet)
- [isString ✔️](https://alt-lodash.vercel.app/home#isString)
- [isSymbol ✔️](https://alt-lodash.vercel.app/home#isSymbol)
- [isTypedArray ✔️](https://alt-lodash.vercel.app/home#isTypedArray)
- [isUndefined ✔️](https://alt-lodash.vercel.app/home#isUndefined)
- [isWeakMap ✔️](https://alt-lodash.vercel.app/home#isWeakMap)
- [isWeakSet ✔️](https://alt-lodash.vercel.app/home#isWeakSet)
- [lt ✔️](https://alt-lodash.vercel.app/home#lt)
- [lte ✔️](https://alt-lodash.vercel.app/home#lte)
- [toArray ✔️](https://alt-lodash.vercel.app/home#toArray)
- toFinite ( 🔜 - Work in progress - PRs most welcome ) [Issue - #27](https://github.com/PunitSoniME/alt-lodash/issues/27)
- [toInteger ✔️](https://alt-lodash.vercel.app/home#toInteger)
- toLength ( 🔜 - Work in progress - PRs most welcome ) [Issue - #28](https://github.com/PunitSoniME/alt-lodash/issues/28)
- [toNumber ✔️](https://alt-lodash.vercel.app/home#toNumber)
- [toPlainObject ✔️](https://alt-lodash.vercel.app/home#toPlainObject)
- [toSafeInteger ✔️](https://alt-lodash.vercel.app/home#toSafeInteger)
- [toString ✔️](https://alt-lodash.vercel.app/home#toString)

<br />

# Math

- [add ✔️](https://alt-lodash.vercel.app/home#add)

- [ceil ✔️](https://alt-lodash.vercel.app/home#ceil)
- [divide ✔️](https://alt-lodash.vercel.app/home#divide)
- [floor ✔️](https://alt-lodash.vercel.app/home#floor)
- [max ✔️](https://alt-lodash.vercel.app/home#max)
- [maxBy ✔️](https://alt-lodash.vercel.app/home#maxBy)
- [mean ✔️](https://alt-lodash.vercel.app/home#mean)
- [meanBy ✔️](https://alt-lodash.vercel.app/home#meanBy)
- [min ✔️](https://alt-lodash.vercel.app/home#min)
- [minBy ✔️](https://alt-lodash.vercel.app/home#minBy)
- [multiply ✔️](https://alt-lodash.vercel.app/home#multiply)
- [round ✔️](https://alt-lodash.vercel.app/home#round)
- [subtract ✔️](https://alt-lodash.vercel.app/home#subtract)
- [sum ✔️](https://alt-lodash.vercel.app/home#sum)
- [sumBy ✔️](https://alt-lodash.vercel.app/home#sumBy)
- [clamp ✔️](https://alt-lodash.vercel.app/home#clamp)
- [inRange ✔️](https://alt-lodash.vercel.app/home#inRange)
- [random ✔️](https://alt-lodash.vercel.app/home#random)

<br />

# Number

- [clamp ✔️](https://alt-lodash.vercel.app/home#clamp)

- [inRange ✔️](https://alt-lodash.vercel.app/home#inRange)
- [random ✔️](https://alt-lodash.vercel.app/home#random)

<br />

# Object

- [assign ✔️](https://alt-lodash.vercel.app/home#assign)

- [assignIn ✔️](https://alt-lodash.vercel.app/home#assignIn)
- [assignInWith ✔️](https://alt-lodash.vercel.app/home#assignInWith)
- [assignWith ✔️](https://alt-lodash.vercel.app/home#assignWith)
- [at ✔️](https://alt-lodash.vercel.app/home#at)
- [create ✔️](https://alt-lodash.vercel.app/home#create)
- [defaults ✔️](https://alt-lodash.vercel.app/home#defaults)
- defaultsDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #42](https://github.com/PunitSoniME/alt-lodash/issues/42)
- [entries -> toPairs ✔️](https://alt-lodash.vercel.app/home#entries)
- [entriesIn -> toPairsIn ✔️](https://alt-lodash.vercel.app/home#entriesIn)
- [extend -> assignIn ✔️](https://alt-lodash.vercel.app/home#extend)
- [extendWith -> assignInWith ✔️](https://alt-lodash.vercel.app/home#extendWith)
- [findKey ✔️](https://alt-lodash.vercel.app/home#findKey)
- [findLastKey ✔️](https://alt-lodash.vercel.app/home#findLastKey)
- [forIn ✔️](https://alt-lodash.vercel.app/home#forIn)
- [forInRight ✔️](https://alt-lodash.vercel.app/home#forInRight)
- [forOwn ✔️](https://alt-lodash.vercel.app/home#forOwn)
- [forOwnRight ✔️](https://alt-lodash.vercel.app/home#forOwnRight)
- [functions ✔️](https://alt-lodash.vercel.app/home#functions)
- [functionsIn ✔️](https://alt-lodash.vercel.app/home#functionsIn)
- [get ✔️](https://alt-lodash.vercel.app/home#get)
- [has ✔️](https://alt-lodash.vercel.app/home#has)
- [hasIn ✔️](https://alt-lodash.vercel.app/home#hasIn)
- [invert ✔️](https://alt-lodash.vercel.app/home#invert)
- [invertBy ✔️](https://alt-lodash.vercel.app/home#invertBy)
- invoke ( 🔜 - Work in progress - PRs most welcome ) [Issue - #46](https://github.com/PunitSoniME/alt-lodash/issues/46)
- [keys ✔️](https://alt-lodash.vercel.app/home#keys)
- [keysIn ✔️](https://alt-lodash.vercel.app/home#keysIn)
- [mapKeys ✔️](https://alt-lodash.vercel.app/home#mapKeys)
- [mapValues ✔️](https://alt-lodash.vercel.app/home#mapValues)
- [merge ✔️](https://alt-lodash.vercel.app/home#merge)
- mergeWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #48](https://github.com/PunitSoniME/alt-lodash/issues/48)
- [omit ✔️](https://alt-lodash.vercel.app/home#omit)
- [omitBy ✔️](https://alt-lodash.vercel.app/home#omitBy)
- [pick ✔️](https://alt-lodash.vercel.app/home#pick)
- [pickBy ✔️](https://alt-lodash.vercel.app/home#pickBy)
- result ( 🔜 - Work in progress - PRs most welcome ) [Issue - #49](https://github.com/PunitSoniME/alt-lodash/issues/49)
- [set ✔️](https://alt-lodash.vercel.app/home#set)
- [setWith ✔️](https://alt-lodash.vercel.app/home#setWith)
- [toPairs ✔️](https://alt-lodash.vercel.app/home#toPairs)
- [toPairsIn ✔️](https://alt-lodash.vercel.app/home#toPairsIn)
- [transform ✔️](https://alt-lodash.vercel.app/home#transform)
- [unset ✔️](https://alt-lodash.vercel.app/home#unset)
- [update ✔️](https://alt-lodash.vercel.app/home#update)
- [updateWith ✔️](https://alt-lodash.vercel.app/home#updateWith)
- [values ✔️](https://alt-lodash.vercel.app/home#values)
- [valuesIn ✔️](https://alt-lodash.vercel.app/home#valuesIn)

<br />

# String

- [camelCase ✔️](https://alt-lodash.vercel.app/home#camelCase)

- [capitalize ✔️](https://alt-lodash.vercel.app/home#capitalize)
- deburr ( 🔜 - Work in progress - PRs most welcome ) [Issue - #63](https://github.com/PunitSoniME/alt-lodash/issues/63)
- [endsWith ✔️](https://alt-lodash.vercel.app/home#endsWith)
- [escape ✔️](https://alt-lodash.vercel.app/home#escape)
- [escapeRegExp ✔️](https://alt-lodash.vercel.app/home#escapeRegExp)
- [kebabCase ✔️](https://alt-lodash.vercel.app/home#kebabCase)
- [lowerCase ✔️](https://alt-lodash.vercel.app/home#lowerCase)
- [lowerFirst ✔️](https://alt-lodash.vercel.app/home#lowerFirst)
- [pad ✔️](https://alt-lodash.vercel.app/home#pad)
- [padEnd ✔️](https://alt-lodash.vercel.app/home#padEnd)
- [padStart ✔️](https://alt-lodash.vercel.app/home#padStart)
- [parseInt ✔️](https://alt-lodash.vercel.app/home#parseInt)
- [repeat ✔️](https://alt-lodash.vercel.app/home#repeat)
- [replace ✔️](https://alt-lodash.vercel.app/home#replace)
- [snakeCase ✔️](https://alt-lodash.vercel.app/home#snakeCase)
- [split ✔️](https://alt-lodash.vercel.app/home#split)
- [startCase ✔️](https://alt-lodash.vercel.app/home#startCase)
- [startsWith ✔️](https://alt-lodash.vercel.app/home#startsWith)
- template ( 🔜 - Work in progress - PRs most welcome )
- [toLower ✔️](https://alt-lodash.vercel.app/home#toLower)
- [toUpper ✔️](https://alt-lodash.vercel.app/home#toUpper)
- [trim ✔️](https://alt-lodash.vercel.app/home#trim)
- [trimEnd ✔️](https://alt-lodash.vercel.app/home#trimEnd)
- [trimStart ✔️](https://alt-lodash.vercel.app/home#trimStart)
- truncate ( 🔜 - Work in progress - PRs most welcome ) [Issue - #64](https://github.com/PunitSoniME/alt-lodash/issues/64)
- [unescape ✔️](https://alt-lodash.vercel.app/home#unescape)
- [upperCase ✔️](https://alt-lodash.vercel.app/home#upperCase)
- [upperFirst ✔️](https://alt-lodash.vercel.app/home#upperFirst)
- [words ✔️](https://alt-lodash.vercel.app/home#words)

<br />

# Util

- [attempt ✔️](https://alt-lodash.vercel.app/home#attempt)

- bindAll ( 🔜 - Work in progress - PRs most welcome ) [Issue - #67](https://github.com/PunitSoniME/alt-lodash/issues/67)
- [cond ✔️](https://alt-lodash.vercel.app/home#cond)
- [conforms ✔️](https://alt-lodash.vercel.app/home#conforms)
- [constant ✔️](https://alt-lodash.vercel.app/home#constant)
- [defaultTo ✔️](https://alt-lodash.vercel.app/home#defaultTo)
- [flow ✔️](https://alt-lodash.vercel.app/home#flow)
- [flowRight ✔️](https://alt-lodash.vercel.app/home#flowRight)
- [identity ✔️](https://alt-lodash.vercel.app/home#identity)
- [iteratee ✔️](https://alt-lodash.vercel.app/home#iteratee)
- matches ( 🔜 - Work in progress - PRs most welcome ) [Issue - #68](https://github.com/PunitSoniME/alt-lodash/issues/68)
- matchesProperty ( 🔜 - Work in progress - PRs most welcome ) [Issue - #69](https://github.com/PunitSoniME/alt-lodash/issues/69)
- [method ✔️](https://alt-lodash.vercel.app/home#method)
- [methodOf ✔️](https://alt-lodash.vercel.app/home#methodOf)
- mixin ( 🔜 - Work in progress - PRs most welcome ) [Issue - #72](https://github.com/PunitSoniME/alt-lodash/issues/72)
- noConflict ( 🔜 - Work in progress - PRs most welcome ) [Issue - #73](https://github.com/PunitSoniME/alt-lodash/issues/73)
- [noop ✔️](https://alt-lodash.vercel.app/home#noop)
- [nthArg ✔️](https://alt-lodash.vercel.app/home#nthArg)
- [over ✔️](https://alt-lodash.vercel.app/home#over)
- [overEvery ✔️](https://alt-lodash.vercel.app/home#overEvery)
- [overSome ✔️](https://alt-lodash.vercel.app/home#overSome)
- [property ✔️](https://alt-lodash.vercel.app/home#property)
- [propertyOf ✔️](https://alt-lodash.vercel.app/home#propertyOf)
- [range ✔️](https://alt-lodash.vercel.app/home#range)
- [rangeRight ✔️](https://alt-lodash.vercel.app/home#rangeRight)
- runInContext ( 🔜 - Work in progress - PRs most welcome ) [Issue - #75](https://github.com/PunitSoniME/alt-lodash/issues/75)
- [sleep ✔️ **New**](https://alt-lodash.vercel.app/home#sleep)
- [stubArray ✔️](https://alt-lodash.vercel.app/home#stubArray)
- [stubFalse ✔️](https://alt-lodash.vercel.app/home#stubFalse)
- [stubObject ✔️](https://alt-lodash.vercel.app/home#stubObject)
- [stubString ✔️](https://alt-lodash.vercel.app/home#stubString)
- [stubTrue ✔️](https://alt-lodash.vercel.app/home#stubTrue)
- [times ✔️](https://alt-lodash.vercel.app/home#times)
- [toPath ✔️](https://alt-lodash.vercel.app/home#toPath)
- [uniqueId ✔️](https://alt-lodash.vercel.app/home#uniqueId)
- [uniqueId2 ✔️ **New**](https://alt-lodash.vercel.app/home#uniqueId2)

<br />

# Seq

- _ ( 🔜 - Work in progress - PRs most welcome )

- ~~chain~~
- [chain2 ✔️ ( Alternate of chain method with minimal code )](https://alt-lodash.vercel.app/home#chain2)


    ```ts
    chain2(value)
    ```

    ## Arguments
    
    ```bash
    value (*): The value to wrap.
    ```

    ## Returns
    
    ```bash
    (Object): Returns the new wrapper instance.
    ```

    ## Example
    
    ```typescript
    import { chain2, map, sortBy, head } from 'alt-lodash';

    const users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'pebbles', 'age': 1 }
    ];

    const youngest = chain2(users)
        .fn(sortBy, 'age')
        .fn(map, (function (o: any) {
            return o.user + ' is ' + o.age;
        }))
        .fn(head)
        .value();

    // => 'pebbles is 1'
    ```


- ~~tap~~
- [tap2 ✔️ ( Alternate of tap method with minimal code )](https://alt-lodash.vercel.app/home#tap2)


    ```ts
    tap2(value, interceptor)
    ```

    ## Arguments
    
    ```bash
    value (*): The value to provide to interceptor.
    interceptor (Function): The function to invoke.
    ```

    ## Returns
    
    ```bash
    (*): Returns value.
    ```

    ## Example
    
    ```typescript
    import { tap2, concat } from 'alt-lodash';

    const data = [1, 2, 3];

    const tappedData = tap2(data, (array: number[]) => {
        // Mutate input array.
        array.push(100);
    })
        .fn(concat, [4])
        .fn(concat, [5])
        .value();

    // => [1, 2, 3, 100, 4, 5]
    ```

- [thru ✔️](https://alt-lodash.vercel.app/home#thru)
- prototype[Symbol.iterator] ( 🔜 - Work in progress - PRs most welcome )
- prototype.at ( 🔜 - Work in progress - PRs most welcome )
- prototype.chain ( 🔜 - Work in progress - PRs most welcome )
- prototype.commit ( 🔜 - Work in progress - PRs most welcome )
- prototype.next ( 🔜 - Work in progress - PRs most welcome )
- prototype.plant ( 🔜 - Work in progress - PRs most welcome )
- prototype.reverse ( 🔜 - Work in progress - PRs most welcome )
- prototype.toJSON -> value ( 🔜 - Work in progress - PRs most welcome )
- prototype.value ( 🔜 - Work in progress - PRs most welcome )
- prototype.valueOf -> value ( 🔜 - Work in progress - PRs most welcome )
