# The Simple and Efficient Utility Library

## https://purekit.vercel.app

<br />


[![CI](https://github.com/PunitSoniME/purekit/actions/workflows/main.yml/badge.svg)](https://github.com/PunitSoniME/purekit/actions/workflows/main.yml)

![tree shaking](https://badgen.net/bundlephobia/tree-shaking/purekit)
![nodejs](https://badgen.net/npm/node/purekit)

[![npm version](https://badge.fury.io/js/purekit.svg)][npm_url]
[![license](https://img.shields.io/npm/l/purekit.svg)][npm_url]
![Types Included](https://badgen.net/npm/types/purekit)

![dependents](https://badgen.net/npm/dependents/purekit)
[![weekly downloads](https://badgen.net/npm/dw/purekit)][npm_url]
[![weekly downloads](https://badgen.net/npm/dm/purekit)][npm_url]
[![downloads](https://img.shields.io/npm/dt/purekit.svg)][npm_url]
![jsDelivr](https://badgen.net/jsdelivr/hits/npm/purekit)

![minified](https://badgen.net/bundlephobia/min/purekit)
![gzip](https://badgen.net/bundlephobia/minzip/purekit)

[npm_url]: https://www.npmjs.org/package/purekit


# Installation

With Yarn:

```bash
yarn add purekit
```

With npm:

```bash
npm install purekit
```

# Usage

```ts
//  import all available the methods

import _ from 'purekit';     //  ESM ( ECMA Script ) module

or

const _ = require('purekit');    //  cjs ( common js ) module
```


```ts
//  import specific methods instead of all

import { concat, chunk, forEach, filter } from 'purekit';     //  ESM ( ECMA Script ) module

or

const { concat, chunk, forEach, filter } = require('purekit');    //  cjs ( common js ) module
```


# Array

- [chunk ✔️](https://purekit.vercel.app/home#chunk)

- [compact ✔️](https://purekit.vercel.app/home#compact)
- [concat ✔️](https://purekit.vercel.app/home#concat)
- [difference ✔️](https://purekit.vercel.app/home#difference)
- [differenceBy ✔️](https://purekit.vercel.app/home#differenceBy)
- [differenceWith ✔️](https://purekit.vercel.app/home#differenceWith)
- [drop ✔️](https://purekit.vercel.app/home#drop)
- [dropRight ✔️](https://purekit.vercel.app/home#dropRight)
- [dropRightWhile ✔️](https://purekit.vercel.app/home#dropRightWhile)
- [dropWhile ✔️](https://purekit.vercel.app/home#dropWhile)
- [fill ✔️](https://purekit.vercel.app/home#fill)
- [findIndex ✔️](https://purekit.vercel.app/home#findIndex)
- [findLastIndex ✔️](https://purekit.vercel.app/home#findLastIndex)
- [first -> head ✔️](https://purekit.vercel.app/home#first)
- [flatten ✔️](https://purekit.vercel.app/home#flatten)
- [flattenDeep ✔️](https://purekit.vercel.app/home#flattenDeep)
- [flattenDepth ✔️](https://purekit.vercel.app/home#flattenDepth)
- [fromPairs ✔️](https://purekit.vercel.app/home#fromPairs)
- [head ✔️](https://purekit.vercel.app/home#head)
- [indexOf ✔️](https://purekit.vercel.app/home#indexOf)
- [initial ✔️](https://purekit.vercel.app/home#initial)
- [intersection ✔️](https://purekit.vercel.app/home#intersection)
- [intersectionBy ✔️](https://purekit.vercel.app/home#intersectionBy)
- [intersectionWith ✔️](https://purekit.vercel.app/home#intersectionWith)
- [join ✔️](https://purekit.vercel.app/home#join)
- [last ✔️](https://purekit.vercel.app/home#last)
- [lastIndexOf ✔️](https://purekit.vercel.app/home#lastIndexOf)
- [nth ✔️](https://purekit.vercel.app/home#nth)
- [pull ✔️](https://purekit.vercel.app/home#pull)
- [pullAll ✔️](https://purekit.vercel.app/home#pullAll)
- [pullAllBy ✔️](https://purekit.vercel.app/home#pullAllBy)
- [pullAllWith ✔️](https://purekit.vercel.app/home#pullAllWith)
- [pullAt ✔️](https://purekit.vercel.app/home#pullAt)
- [remove ✔️](https://purekit.vercel.app/home#remove)
- [reverse ✔️](https://purekit.vercel.app/home#reverse)
- [slice ✔️](https://purekit.vercel.app/home#slice)
- [sortedIndex ✔️](https://purekit.vercel.app/home#sortedIndex)
- [sortedIndexBy ✔️](https://purekit.vercel.app/home#sortedIndexBy)
- [sortedIndexOf ✔️](https://purekit.vercel.app/home#sortedIndexOf)
- [sortedLastIndex ✔️](https://purekit.vercel.app/home#sortedLastIndex)
- [sortedLastIndexBy ✔️](https://purekit.vercel.app/home#sortedLastIndexBy)
- [sortedLastIndexOf ✔️](https://purekit.vercel.app/home#sortedLastIndexOf)
- [sortedUniq ✔️](https://purekit.vercel.app/home#sortedUniq)
- [sortedUniqBy ✔️](https://purekit.vercel.app/home#sortedUniqBy)
- [tail ✔️](https://purekit.vercel.app/home#tail)
- [take ✔️](https://purekit.vercel.app/home#take)
- [takeRight ✔️](https://purekit.vercel.app/home#takeRight)
- [takeRightWhile ✔️](https://purekit.vercel.app/home#takeRightWhile)
- [takeWhile ✔️](https://purekit.vercel.app/home#takeWhile)
- [union ✔️](https://purekit.vercel.app/home#union)
- [unionBy ✔️](https://purekit.vercel.app/home#unionBy)
- [unionWith ✔️](https://purekit.vercel.app/home#unionWith)
- [uniq ✔️](https://purekit.vercel.app/home#uniq)
- [uniqBy ✔️](https://purekit.vercel.app/home#uniqBy)
- [uniqWith ✔️](https://purekit.vercel.app/home#uniqWith)
- [unshift ✔️ **New**](https://purekit.vercel.app/home#unshift)
- [unzip ✔️](https://purekit.vercel.app/home#unzip)
- [unzipWith ✔️](https://purekit.vercel.app/home#unzipWith)
- [without ✔️](https://purekit.vercel.app/home#without)
- [xor ✔️](https://purekit.vercel.app/home#xor)
- [xorBy ✔️](https://purekit.vercel.app/home#xorBy)
- [xorWith ✔️](https://purekit.vercel.app/home#xorWith)
- [zip ✔️](https://purekit.vercel.app/home#zip)
- [zipObject ✔️](https://purekit.vercel.app/home#zipObject)
- zipObjectDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #13](https://github.com/PunitSoniME/purekit/issues/13)
- [zipWith ✔️](https://purekit.vercel.app/home#zipWith)

<br />

# Collection

- [countBy ✔️](https://purekit.vercel.app/home#countBy)

- [each -> forEach ✔️](https://purekit.vercel.app/home#each)
- [eachRight -> forEachRight ✔️](https://purekit.vercel.app/home#eachRight)
- [every ✔️](https://purekit.vercel.app/home#every)
- [filter ✔️](https://purekit.vercel.app/home#filter)
- [find ✔️](https://purekit.vercel.app/home#find)
- [findLast ✔️](https://purekit.vercel.app/home#findLast)
- [flatMap ✔️](https://purekit.vercel.app/home#flatMap)
- [flatMapDeep ✔️](https://purekit.vercel.app/home#flatMapDeep)
- [flatMapDepth ✔️](https://purekit.vercel.app/home#flatMapDepth)
- [forEach ✔️](https://purekit.vercel.app/home#forEach)
- [forEachRight ✔️](https://purekit.vercel.app/home#forEachRight)
- [freeze ✔️ **New**](https://purekit.vercel.app/home#freeze)
- [groupBy ✔️](https://purekit.vercel.app/home#groupBy)
- [includes ✔️](https://purekit.vercel.app/home#includes)
- [invokeMap ✔️](https://purekit.vercel.app/home#invokeMap)
- [keyBy ✔️](https://purekit.vercel.app/home#keyBy)
- [map ✔️](https://purekit.vercel.app/home#map)
- [orderBy ✔️](https://purekit.vercel.app/home#orderBy)
- [partition ✔️](https://purekit.vercel.app/home#partition)
- [preventExtensions ✔️ **New**](https://purekit.vercel.app/home#preventExtensions)
- [reduce ✔️](https://purekit.vercel.app/home#reduce)
- [reduceRight ✔️](https://purekit.vercel.app/home#reduceRight)
- [reject ✔️](https://purekit.vercel.app/home#reject)
- [sample ✔️](https://purekit.vercel.app/home#sample)
- [sampleSize ✔️](https://purekit.vercel.app/home#sampleSize)
- [seal ✔️ **New**](https://purekit.vercel.app/home#seal)
- [shuffle ✔️](https://purekit.vercel.app/home#shuffle)
- [size ✔️](https://purekit.vercel.app/home#size)
- [some ✔️](https://purekit.vercel.app/home#some)
- [sortBy ✔️](https://purekit.vercel.app/home#sortBy)

<br />

# Dates

- [now ✔️](https://purekit.vercel.app/home#now)

<br />

# Function

- [after ✔️](https://purekit.vercel.app/home#after)

- [ary ✔️](https://purekit.vercel.app/home#ary)
- [before ✔️](https://purekit.vercel.app/home#before)
- [bind ✔️](https://purekit.vercel.app/home#bind)
- [bindKey ✔️](https://purekit.vercel.app/home#bindKey)
- [curry ✔️](https://purekit.vercel.app/home#curry)
- [curryRight ✔️](https://purekit.vercel.app/home#curryRight)
- [debounce ✔️](https://purekit.vercel.app/home#debounce)
- defer ( 🔜 - Work in progress - PRs most welcome ) [Issue - #17](https://github.com/PunitSoniME/purekit/issues/17)
- [delay ✔️](https://purekit.vercel.app/home#delay)
- [flip ✔️](https://purekit.vercel.app/home#flip)
- memoize ( 🔜 - Work in progress - PRs most welcome ) [Issue - #18](https://github.com/PunitSoniME/purekit/issues/18)
- [negate ✔️](https://purekit.vercel.app/home#negate)
- [once ✔️](https://purekit.vercel.app/home#once)
- [overArgs ✔️](https://purekit.vercel.app/home#overArgs)
- [partial ✔️](https://purekit.vercel.app/home#partial)
- [partialRight ✔️](https://purekit.vercel.app/home#partialRight)
- [rearg ✔️](https://purekit.vercel.app/home#rearg)
- [rest ✔️](https://purekit.vercel.app/home#rest)
- [spread ✔️](https://purekit.vercel.app/home#spread)
- throttle ( 🔜 - Work in progress - PRs most welcome ) [Issue - #19](https://github.com/PunitSoniME/purekit/issues/19)
- [unary ✔️](https://purekit.vercel.app/home#unary)
- [wrap ✔️](https://purekit.vercel.app/home#wrap)

<br />

# Lang

- [castArray ✔️](https://purekit.vercel.app/home#castArray)

- [clone ✔️](https://purekit.vercel.app/home#clone)
- [cloneDeep ✔️](https://purekit.vercel.app/home#cloneDeep)
- cloneDeepWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #20](https://github.com/PunitSoniME/purekit/issues/20)
- [cloneWith ✔️](https://purekit.vercel.app/home#cloneWith)
- [conformsTo ✔️](https://purekit.vercel.app/home#conformsTo)
- [eq ✔️](https://purekit.vercel.app/home#eq)
- [gt ✔️](https://purekit.vercel.app/home#gt)
- [gte ✔️](https://purekit.vercel.app/home#gte)
- [isArguments ✔️](https://purekit.vercel.app/home#isArguments)
- [isArray ✔️](https://purekit.vercel.app/home#isArray)
- [isArrayBuffer ✔️](https://purekit.vercel.app/home#isArrayBuffer)
- [isArrayLike ✔️](https://purekit.vercel.app/home#isArrayLike)
- [isArrayLikeObject ✔️](https://purekit.vercel.app/home#isArrayLikeObject)
- [isBoolean ✔️](https://purekit.vercel.app/home#isBoolean)
- [isBuffer ✔️](https://purekit.vercel.app/home#isBuffer)
- [isDate ✔️](https://purekit.vercel.app/home#isDate)
- [isElement ✔️](https://purekit.vercel.app/home#isElement)
- [isEmpty ✔️](https://purekit.vercel.app/home#isEmpty)
- [isEqual ✔️](https://purekit.vercel.app/home#isEqual)
- [isEqualWith ✔️](https://purekit.vercel.app/home#isEqualWith)
- [isError ✔️](https://purekit.vercel.app/home#isError)
- [isExtensible ✔️ **New**](https://purekit.vercel.app/home#isExtensible)
- [isFinite ✔️](https://purekit.vercel.app/home#isFinite)
- [isFrozen ✔️ **New**](https://purekit.vercel.app/home#isFrozen)
- [isFunction ✔️](https://purekit.vercel.app/home#isFunction)
- [isInteger ✔️](https://purekit.vercel.app/home#isInteger)
- [isLength ✔️](https://purekit.vercel.app/home#isLength)
- [isMap ✔️](https://purekit.vercel.app/home#isMap)
- [isMatch ✔️](https://purekit.vercel.app/home#isMatch)
- [isMatchWith ✔️](https://purekit.vercel.app/home#isMatchWith)
- [isNaN ✔️](https://purekit.vercel.app/home#isNaN)
- [isNative ✔️](https://purekit.vercel.app/home#isNative)
- [isNil ✔️](https://purekit.vercel.app/home#isNil)
- [isNode ✔️ **New**](https://purekit.vercel.app/home#isNode)
- [isNull ✔️](https://purekit.vercel.app/home#isNull)
- [isNumber ✔️](https://purekit.vercel.app/home#isNumber)
- [isObject ✔️](https://purekit.vercel.app/home#isObject)
- [isObjectLike ✔️](https://purekit.vercel.app/home#isObjectLike)
- [isPlainObject ✔️](https://purekit.vercel.app/home#isPlainObject)
- [isRegExp ✔️](https://purekit.vercel.app/home#isRegExp)
- [isSafeInteger ✔️](https://purekit.vercel.app/home#isSafeInteger)
- [isSealed ✔️ **New**](https://purekit.vercel.app/home#isSealed)
- [isSet ✔️](https://purekit.vercel.app/home#isSet)
- [isString ✔️](https://purekit.vercel.app/home#isString)
- [isSymbol ✔️](https://purekit.vercel.app/home#isSymbol)
- [isTypedArray ✔️](https://purekit.vercel.app/home#isTypedArray)
- [isUndefined ✔️](https://purekit.vercel.app/home#isUndefined)
- [isWeakMap ✔️](https://purekit.vercel.app/home#isWeakMap)
- [isWeakSet ✔️](https://purekit.vercel.app/home#isWeakSet)
- [lt ✔️](https://purekit.vercel.app/home#lt)
- [lte ✔️](https://purekit.vercel.app/home#lte)
- [toArray ✔️](https://purekit.vercel.app/home#toArray)
- [toFinite ✔️](https://purekit.vercel.app/toFinite#toArray)
- [toInteger ✔️](https://purekit.vercel.app/home#toInteger)
- toLength ( 🔜 - Work in progress - PRs most welcome ) [Issue - #28](https://github.com/PunitSoniME/purekit/issues/28)
- [toNumber ✔️](https://purekit.vercel.app/home#toNumber)
- [toPlainObject ✔️](https://purekit.vercel.app/home#toPlainObject)
- [toSafeInteger ✔️](https://purekit.vercel.app/home#toSafeInteger)
- [toString ✔️](https://purekit.vercel.app/home#toString)

<br />

# Math

- [add ✔️](https://purekit.vercel.app/home#add)

- [ceil ✔️](https://purekit.vercel.app/home#ceil)
- [divide ✔️](https://purekit.vercel.app/home#divide)
- [floor ✔️](https://purekit.vercel.app/home#floor)
- [max ✔️](https://purekit.vercel.app/home#max)
- [maxBy ✔️](https://purekit.vercel.app/home#maxBy)
- [mean ✔️](https://purekit.vercel.app/home#mean)
- [meanBy ✔️](https://purekit.vercel.app/home#meanBy)
- [min ✔️](https://purekit.vercel.app/home#min)
- [minBy ✔️](https://purekit.vercel.app/home#minBy)
- [multiply ✔️](https://purekit.vercel.app/home#multiply)
- [round ✔️](https://purekit.vercel.app/home#round)
- [subtract ✔️](https://purekit.vercel.app/home#subtract)
- [sum ✔️](https://purekit.vercel.app/home#sum)
- [sumBy ✔️](https://purekit.vercel.app/home#sumBy)
- [clamp ✔️](https://purekit.vercel.app/home#clamp)
- [inRange ✔️](https://purekit.vercel.app/home#inRange)
- [random ✔️](https://purekit.vercel.app/home#random)

<br />

# Number

- [clamp ✔️](https://purekit.vercel.app/home#clamp)

- [inRange ✔️](https://purekit.vercel.app/home#inRange)
- [random ✔️](https://purekit.vercel.app/home#random)

<br />

# Object

- [assign ✔️](https://purekit.vercel.app/home#assign)

- [assignIn ✔️](https://purekit.vercel.app/home#assignIn)
- [assignInWith ✔️](https://purekit.vercel.app/home#assignInWith)
- [assignWith ✔️](https://purekit.vercel.app/home#assignWith)
- [at ✔️](https://purekit.vercel.app/home#at)
- [create ✔️](https://purekit.vercel.app/home#create)
- [defaults ✔️](https://purekit.vercel.app/home#defaults)
- defaultsDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #42](https://github.com/PunitSoniME/purekit/issues/42)
- [entries -> toPairs ✔️](https://purekit.vercel.app/home#entries)
- [entriesIn -> toPairsIn ✔️](https://purekit.vercel.app/home#entriesIn)
- [extend -> assignIn ✔️](https://purekit.vercel.app/home#extend)
- [extendWith -> assignInWith ✔️](https://purekit.vercel.app/home#extendWith)
- [findKey ✔️](https://purekit.vercel.app/home#findKey)
- [findLastKey ✔️](https://purekit.vercel.app/home#findLastKey)
- [forIn ✔️](https://purekit.vercel.app/home#forIn)
- [forInRight ✔️](https://purekit.vercel.app/home#forInRight)
- [forOwn ✔️](https://purekit.vercel.app/home#forOwn)
- [forOwnRight ✔️](https://purekit.vercel.app/home#forOwnRight)
- [functions ✔️](https://purekit.vercel.app/home#functions)
- [functionsIn ✔️](https://purekit.vercel.app/home#functionsIn)
- [get ✔️](https://purekit.vercel.app/home#get)
- [has ✔️](https://purekit.vercel.app/home#has)
- [hasIn ✔️](https://purekit.vercel.app/home#hasIn)
- [invert ✔️](https://purekit.vercel.app/home#invert)
- [invertBy ✔️](https://purekit.vercel.app/home#invertBy)
- invoke ( 🔜 - Work in progress - PRs most welcome ) [Issue - #46](https://github.com/PunitSoniME/purekit/issues/46)
- [keys ✔️](https://purekit.vercel.app/home#keys)
- [keysIn ✔️](https://purekit.vercel.app/home#keysIn)
- [mapKeys ✔️](https://purekit.vercel.app/home#mapKeys)
- [mapValues ✔️](https://purekit.vercel.app/home#mapValues)
- [merge ✔️](https://purekit.vercel.app/home#merge)
- mergeWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #48](https://github.com/PunitSoniME/purekit/issues/48)
- [omit ✔️](https://purekit.vercel.app/home#omit)
- [omitBy ✔️](https://purekit.vercel.app/home#omitBy)
- [pick ✔️](https://purekit.vercel.app/home#pick)
- [pickBy ✔️](https://purekit.vercel.app/home#pickBy)
- result ( 🔜 - Work in progress - PRs most welcome ) [Issue - #49](https://github.com/PunitSoniME/purekit/issues/49)
- [set ✔️](https://purekit.vercel.app/home#set)
- [setWith ✔️](https://purekit.vercel.app/home#setWith)
- [toPairs ✔️](https://purekit.vercel.app/home#toPairs)
- [toPairsIn ✔️](https://purekit.vercel.app/home#toPairsIn)
- [transform ✔️](https://purekit.vercel.app/home#transform)
- [unset ✔️](https://purekit.vercel.app/home#unset)
- [update ✔️](https://purekit.vercel.app/home#update)
- [updateWith ✔️](https://purekit.vercel.app/home#updateWith)
- [values ✔️](https://purekit.vercel.app/home#values)
- [valuesIn ✔️](https://purekit.vercel.app/home#valuesIn)

<br />

# String

- [camelCase ✔️](https://purekit.vercel.app/home#camelCase)

- [capitalize ✔️](https://purekit.vercel.app/home#capitalize)
- deburr ( 🔜 - Work in progress - PRs most welcome ) [Issue - #63](https://github.com/PunitSoniME/purekit/issues/63)
- [endsWith ✔️](https://purekit.vercel.app/home#endsWith)
- [escape ✔️](https://purekit.vercel.app/home#escape)
- [escapeRegExp ✔️](https://purekit.vercel.app/home#escapeRegExp)
- [kebabCase ✔️](https://purekit.vercel.app/home#kebabCase)
- [lowerCase ✔️](https://purekit.vercel.app/home#lowerCase)
- [lowerFirst ✔️](https://purekit.vercel.app/home#lowerFirst)
- [pad ✔️](https://purekit.vercel.app/home#pad)
- [padEnd ✔️](https://purekit.vercel.app/home#padEnd)
- [padStart ✔️](https://purekit.vercel.app/home#padStart)
- [parseInt ✔️](https://purekit.vercel.app/home#parseInt)
- [repeat ✔️](https://purekit.vercel.app/home#repeat)
- [replace ✔️](https://purekit.vercel.app/home#replace)
- [snakeCase ✔️](https://purekit.vercel.app/home#snakeCase)
- [split ✔️](https://purekit.vercel.app/home#split)
- [startCase ✔️](https://purekit.vercel.app/home#startCase)
- [startsWith ✔️](https://purekit.vercel.app/home#startsWith)
- template ( 🔜 - Work in progress - PRs most welcome ) [Issue - #139](https://github.com/PunitSoniME/purekit/issues/139)
- [toLower ✔️](https://purekit.vercel.app/home#toLower)
- [toUpper ✔️](https://purekit.vercel.app/home#toUpper)
- [trim ✔️](https://purekit.vercel.app/home#trim)
- [trimEnd ✔️](https://purekit.vercel.app/home#trimEnd)
- [trimStart ✔️](https://purekit.vercel.app/home#trimStart)
- truncate ( 🔜 - Work in progress - PRs most welcome ) [Issue - #64](https://github.com/PunitSoniME/purekit/issues/64)
- [unescape ✔️](https://purekit.vercel.app/home#unescape)
- [upperCase ✔️](https://purekit.vercel.app/home#upperCase)
- [upperFirst ✔️](https://purekit.vercel.app/home#upperFirst)
- [words ✔️](https://purekit.vercel.app/home#words)

<br />

# Util

- [attempt ✔️](https://purekit.vercel.app/home#attempt)

- bindAll ( 🔜 - Work in progress - PRs most welcome ) [Issue - #67](https://github.com/PunitSoniME/purekit/issues/67)
- [cond ✔️](https://purekit.vercel.app/home#cond)
- [conforms ✔️](https://purekit.vercel.app/home#conforms)
- [constant ✔️](https://purekit.vercel.app/home#constant)
- [defaultTo ✔️](https://purekit.vercel.app/home#defaultTo)
- [flow ✔️](https://purekit.vercel.app/home#flow)
- [flowRight ✔️](https://purekit.vercel.app/home#flowRight)
- [identity ✔️](https://purekit.vercel.app/home#identity)
- [iteratee ✔️](https://purekit.vercel.app/home#iteratee)
- matches ( 🔜 - Work in progress - PRs most welcome ) [Issue - #68](https://github.com/PunitSoniME/purekit/issues/68)
- matchesProperty ( 🔜 - Work in progress - PRs most welcome ) [Issue - #69](https://github.com/PunitSoniME/purekit/issues/69)
- [method ✔️](https://purekit.vercel.app/home#method)
- [methodOf ✔️](https://purekit.vercel.app/home#methodOf)
- mixin ( 🔜 - Work in progress - PRs most welcome ) [Issue - #72](https://github.com/PunitSoniME/purekit/issues/72)
- noConflict ( 🔜 - Work in progress - PRs most welcome ) [Issue - #73](https://github.com/PunitSoniME/purekit/issues/73)
- [noop ✔️](https://purekit.vercel.app/home#noop)
- [nthArg ✔️](https://purekit.vercel.app/home#nthArg)
- [over ✔️](https://purekit.vercel.app/home#over)
- [overEvery ✔️](https://purekit.vercel.app/home#overEvery)
- [overSome ✔️](https://purekit.vercel.app/home#overSome)
- [property ✔️](https://purekit.vercel.app/home#property)
- [propertyOf ✔️](https://purekit.vercel.app/home#propertyOf)
- [range ✔️](https://purekit.vercel.app/home#range)
- [rangeRight ✔️](https://purekit.vercel.app/home#rangeRight)
- runInContext ( 🔜 - Work in progress - PRs most welcome ) [Issue - #75](https://github.com/PunitSoniME/purekit/issues/75)
- [sleep ✔️ **New**](https://purekit.vercel.app/home#sleep)
- [stubArray ✔️](https://purekit.vercel.app/home#stubArray)
- [stubFalse ✔️](https://purekit.vercel.app/home#stubFalse)
- [stubObject ✔️](https://purekit.vercel.app/home#stubObject)
- [stubString ✔️](https://purekit.vercel.app/home#stubString)
- [stubTrue ✔️](https://purekit.vercel.app/home#stubTrue)
- [times ✔️](https://purekit.vercel.app/home#times)
- [toPath ✔️](https://purekit.vercel.app/home#toPath)
- [uniqueId ✔️](https://purekit.vercel.app/home#uniqueId)
- [uniqueId2 ✔️ **New**](https://purekit.vercel.app/home#uniqueId2)

<br />

# Seq

- _ ( 🔜 - Work in progress - PRs most welcome )

- ~~chain~~
- [chain2 ✔️ ( Alternate of chain method with minimal code )](https://purekit.vercel.app/home#chain2)


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
    import { chain2, map, sortBy, head } from 'purekit';

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
- [tap2 ✔️ ( Alternate of tap method with minimal code )](https://purekit.vercel.app/home#tap2)


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
    import { tap2, concat } from 'purekit';

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

- [thru ✔️](https://purekit.vercel.app/home#thru)
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
