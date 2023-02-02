# Alternate of Lodash Library

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

![gzip](https://badgen.net/bundlephobia/minzip/alt-lodash)
![minified](https://badgen.net/bundlephobia/min/alt-lodash)


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

- chunk ✔️

    ```ts
    chunk(collection: [], [chunkSize = 1])
    ```

    ## Arguments
    
    ```bash
    collection (Array): The array to process.
    [chunkSize = 1] (number): The length of each chunk
    ```

    ## Returns
    
    ```bash
    (Array): Returns the new array of chunks.
    ```

- compact ✔️
- concat ✔️
- difference ✔️
- differenceBy ✔️
- differenceWith ✔️
- drop ✔️
- dropRight ✔️
- dropRightWhile ✔️
- dropWhile ✔️
- fill ✔️
- findIndex ✔️
- findLastIndex ✔️
- first -> head ✔️
- flatten ✔️
- flattenDeep ✔️
- flattenDepth ✔️
- fromPairs ✔️
- head ✔️
- indexOf ✔️
- initial ✔️
- intersection ✔️
- intersectionBy ✔️
- intersectionWith ✔️
- join ✔️
- last ✔️
- lastIndexOf ✔️
- nth ✔️
- pull ✔️
- pullAll ✔️
- pullAllBy ✔️
- pullAllWith ✔️
- pullAt ✔️
- remove ✔️
- reverse ✔️
- slice ✔️
- sortedIndex ✔️
- sortedIndexBy ✔️
- sortedIndexOf ✔️
- sortedLastIndex ✔️
- sortedLastIndexBy ✔️
- sortedLastIndexOf ✔️
- sortedUniq ✔️
- sortedUniqBy ✔️
- tail ✔️
- take ✔️
- takeRight ✔️
- takeRightWhile ✔️
- takeWhile ✔️
- union ✔️
- unionBy ✔️
- unionWith ✔️
- uniq ✔️
- uniqBy ✔️
- uniqWith ✔️
- unshift ✔️ **New**
- unzip ✔️
- unzipWith ✔️
- without ✔️
- xor ✔️
- xorBy ✔️
- xorWith ✔️
- zip ✔️
- zipObject ✔️
- zipObjectDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #13](https://github.com/PunitSoniME/alt-lodash/issues/13)
- zipWith ✔️

<br />

# Collection

- countBy ✔️

- each -> forEach ✔️
- eachRight -> forEachRight ✔️
- every ✔️
- filter ✔️
- find ✔️
- findLast ✔️
- flatMap ✔️
- flatMapDeep ✔️
- flatMapDepth ✔️
- forEach ✔️
- forEachRight ✔️
- freeze ✔️ **New**
- groupBy ✔️
- includes ✔️
- invokeMap ✔️
- keyBy ✔️
- map ✔️
- orderBy ✔️
- partition ✔️
- preventExtensions ✔️ **New**
- reduce ✔️
- reduceRight ✔️
- reject ✔️
- sample ✔️
- sampleSize ✔️
- seal ✔️ **New**
- shuffle ✔️
- size ✔️
- some ✔️
- sortBy ✔️

<br />

# Dates

- now ✔️

<br />

# Function

- after ✔️

- ary ✔️
- before ✔️
- bind ✔️
- bindKey ✔️
- curry ✔️
- curryRight ✔️
- debounce ✔️
- defer ( 🔜 - Work in progress - PRs most welcome ) [Issue - #17](https://github.com/PunitSoniME/alt-lodash/issues/17)
- delay ✔️
- flip ✔️
- memoize ( 🔜 - Work in progress - PRs most welcome ) [Issue - #18](https://github.com/PunitSoniME/alt-lodash/issues/18)
- negate ✔️
- once ✔️
- overArgs ✔️
- partial ✔️
- partialRight ✔️
- rearg ✔️
- rest ✔️
- spread ✔️
- throttle ( 🔜 - Work in progress - PRs most welcome ) [Issue - #19](https://github.com/PunitSoniME/alt-lodash/issues/19)
- unary ✔️
- wrap ✔️

<br />

# Lang

- castArray ✔️

- clone ✔️
- cloneDeep ✔️
- cloneDeepWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #20](https://github.com/PunitSoniME/alt-lodash/issues/20)
- cloneWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #21](https://github.com/PunitSoniME/alt-lodash/issues/21)
- conformsTo ✔️
- eq ✔️
- gt ✔️
- gte ✔️
- isArguments ✔️
- isArray ✔️
- isArrayBuffer ✔️
- isArrayLike ✔️
- isArrayLikeObject ✔️
- isBoolean ✔️
- isBuffer ✔️
- isDate ✔️
- isElement ✔️
- isEmpty ✔️
- isEqual ✔️
- isEqualWith ✔️
- isError ✔️
- isExtensible ✔️ **New**
- isFinite ✔️
- isFrozen ✔️ **New**
- isFunction ✔️
- isInteger ✔️
- isLength ✔️
- isMap ✔️
- isMatch ✔️
- isMatchWith ✔️
- isNaN ✔️
- isNative ✔️
- isNil ✔️
- isNode ✔️ **New**
- isNull ✔️
- isNumber ✔️
- isObject ✔️
- isObjectLike ✔️
- isPlainObject ✔️
- isRegExp ✔️
- isSafeInteger ✔️
- isSealed ✔️ **New**
- isSet ✔️
- isString ✔️
- isSymbol ✔️
- isTypedArray ✔️
- isUndefined ✔️
- isWeakMap ✔️
- isWeakSet ✔️
- lt ✔️
- lte ✔️
- toArray ✔️
- toFinite ( 🔜 - Work in progress - PRs most welcome ) [Issue - #27](https://github.com/PunitSoniME/alt-lodash/issues/27)
- toInteger ✔️
- toLength ( 🔜 - Work in progress - PRs most welcome ) [Issue - #28](https://github.com/PunitSoniME/alt-lodash/issues/28)
- toNumber ✔️
- toPlainObject ✔️
- toSafeInteger ✔️
- toString ✔️

<br />

# Math

- add ✔️

- ceil ✔️
- divide ✔️
- floor ✔️
- max ✔️
- maxBy ✔️
- mean ✔️
- meanBy ✔️
- min ✔️
- minBy ✔️
- multiply ✔️
- round ✔️
- subtract ✔️
- sum ✔️
- sumBy ✔️
- clamp ✔️
- inRange ✔️
- random ✔️

<br />

# Number

- clamp ✔️

- inRange ✔️
- random ✔️

<br />

# Object

- assign ✔️

- assignIn ✔️
- assignInWith ✔️
- assignWith ✔️
- at ✔️
- create ✔️
- defaults ✔️
- defaultsDeep ( 🔜 - Work in progress - PRs most welcome ) [Issue - #42](https://github.com/PunitSoniME/alt-lodash/issues/42)
- entries -> toPairs ✔️
- entriesIn -> toPairsIn ✔️
- extend -> assignIn ✔️
- extendWith -> assignInWith ✔️
- findKey ✔️
- findLastKey ✔️
- forIn ✔️
- forInRight ✔️
- forOwn ✔️
- forOwnRight ✔️
- functions ✔️
- functionsIn ✔️
- get ✔️
- has ✔️
- hasIn ✔️
- invert ✔️
- invertBy ✔️
- invoke ( 🔜 - Work in progress - PRs most welcome ) [Issue - #46](https://github.com/PunitSoniME/alt-lodash/issues/46)
- keys ✔️
- keysIn ✔️
- mapKeys ✔️
- mapValues ✔️
- merge ✔️
- mergeWith ( 🔜 - Work in progress - PRs most welcome ) [Issue - #48](https://github.com/PunitSoniME/alt-lodash/issues/48)
- omit ✔️
- omitBy ✔️
- pick ✔️
- pickBy ✔️
- result ( 🔜 - Work in progress - PRs most welcome ) [Issue - #49](https://github.com/PunitSoniME/alt-lodash/issues/49)
- set ✔️
- setWith ✔️
- toPairs ✔️
- toPairsIn ✔️
- transform ( 🔜 - Work in progress - PRs most welcome ) [Issue - #51](https://github.com/PunitSoniME/alt-lodash/issues/51)
- unset ✔️
- update ✔️
- updateWith ✔️
- values ✔️
- valuesIn ✔️

<br />

# String

- camelCase ✔️

- capitalize ✔️
- deburr ( 🔜 - Work in progress - PRs most welcome ) [Issue - #63](https://github.com/PunitSoniME/alt-lodash/issues/63)
- endsWith ✔️
- escape ✔️
- escapeRegExp ✔️
- kebabCase ✔️
- lowerCase ✔️
- lowerFirst ✔️
- pad ✔️
- padEnd ✔️
- padStart ✔️
- parseInt ✔️
- repeat ✔️
- replace ✔️
- snakeCase ✔️
- split ✔️
- startCase ✔️
- startsWith ✔️
- template ( 🔜 - Work in progress - PRs most welcome )
- toLower ✔️
- toUpper ✔️
- trim ✔️
- trimEnd ✔️
- trimStart ✔️
- truncate ( 🔜 - Work in progress - PRs most welcome ) [Issue - #64](https://github.com/PunitSoniME/alt-lodash/issues/64)
- unescape ( 🔜 - Work in progress - PRs most welcome ) [Issue - #65](https://github.com/PunitSoniME/alt-lodash/issues/65)
- upperCase ✔️
- upperFirst ✔️
- words ✔️

<br />

# Util

- attempt ✔️

- bindAll ( 🔜 - Work in progress - PRs most welcome ) [Issue - #67](https://github.com/PunitSoniME/alt-lodash/issues/67)
- cond ✔️
- conforms ✔️
- constant ✔️
- defaultTo ✔️
- flow ✔️
- flowRight ✔️
- identity ✔️
- iteratee ✔️
- matches ( 🔜 - Work in progress - PRs most welcome ) [Issue - #68](https://github.com/PunitSoniME/alt-lodash/issues/68)
- matchesProperty ( 🔜 - Work in progress - PRs most welcome ) [Issue - #69](https://github.com/PunitSoniME/alt-lodash/issues/69)
- method ✔️
- methodOf ✔️
- mixin ( 🔜 - Work in progress - PRs most welcome ) [Issue - #72](https://github.com/PunitSoniME/alt-lodash/issues/72)
- noConflict ( 🔜 - Work in progress - PRs most welcome ) [Issue - #73](https://github.com/PunitSoniME/alt-lodash/issues/73)
- noop ✔️
- nthArg ✔️
- over ✔️
- overEvery ✔️
- overSome ✔️
- property ✔️
- propertyOf ✔️
- range ✔️
- rangeRight ✔️
- runInContext ( 🔜 - Work in progress - PRs most welcome ) [Issue - #75](https://github.com/PunitSoniME/alt-lodash/issues/75)
- sleep ✔️ **New**
- stubArray ✔️
- stubFalse ✔️
- stubObject ✔️
- stubString ✔️
- stubTrue ✔️
- times ✔️
- toPath ✔️
- uniqueId ✔️
- uniqueId2 ✔️ **New**

<br />

# Seq

- _ ( 🔜 - Work in progress - PRs most welcome )

- ~~chain~~
- chain2 ✔️ ( Alternate of chain method with minimal code )


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
- tap2 ✔️ ( Alternate of tap method with minimal code )


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

- thru ( 🔜 - Work in progress - PRs most welcome )
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
